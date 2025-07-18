@php
    use Carbon\Carbon;

    $guardiaNombre = $reporteGuardia->guardia->nombre ?? 'No disponible';
    $guardiaApellido = $reporteGuardia->guardia->apellido_p ?? 'No disponible';
    $guardiaApellidoMat = $reporteGuardia->guardia->apellido_m ?? 'No disponible';
    $guardiaNumEmpleado = $reporteGuardia->guardia->numero_empleado ?? 'No disponible';
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de guardia {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</title>
    <style>
        body {
            font-family: 'DejaVu Sans', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
            color: #333;
        }

        h1, h2, h3 {
            text-align: center;
            color: #1c3d6e;
            margin-bottom: 10px;
        }

        .container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 30px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .info {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }

        .info p {
            margin: 5px 0;
            font-size: 14px;
        }

        .comments, .location {
            font-style: italic;
        }

        .hora {
            background-color: #3D90D7;
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
            font-weight: bold;
        }

        .center {
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Reporte de guardia</h1>
        <p>Fecha de generación: {{ Carbon::now()->format('d/m/Y h:i:s A') }}</p>
    </div>

    <div class="container">
        <div class="info">
            <h2>Detalles del guardia</h2>
            <p><strong>Orden de servicio:</strong> {{ $reporteGuardia->orden_servicio->codigo_orden_servicio }}</p>
            <p><strong>Guardia:</strong> {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</p>
            <p><strong>Punto de vigilancia:</strong> {{ $reporteGuardia->punto_vigilancia }}</p>
            <p><strong>Turno:</strong> {{ $reporteGuardia->turno }}</p>
            <p><strong>Fecha del reporte:</strong> {{ Carbon::parse($reporteGuardia->fecha)->format('d/m/Y h:i:s A') }}</p>
        </div>

        <div class="info">
            <h2>Consignas</h2>
            @if($reporteGuardia->consignas)
                @foreach($reporteGuardia->consignas as $consigna)
                    <div>
                        <span class="hora">{{ $consigna['hora'] }} hrs.</span>
                        <strong>Consigna:</strong> {{ $consigna['texto'] }}
                    </div>
                @endforeach
            @else
                <p>No hay consignas disponibles.</p>
            @endif
        </div>

        <div class="info">
            <h2>Observaciones</h2>
            @if($reporteGuardia->observaciones)
                @foreach($reporteGuardia->observaciones as $observacion)
                    <div>
                        <span class="hora">{{ $observacion['hora'] }} hrs.</span>
                        <strong>Observación:</strong> {{ $observacion['texto'] }}
                    </div>
                @endforeach
            @else
                <p>No hay observaciones disponibles.</p>
            @endif
        </div>

        <div class="info center">
            <h2>Equipo</h2>
            <p><strong>Elemento que entrega el equipo:</strong> {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }}</p>
            <p><strong>Elemento que recibe el equipo:</strong> {{ $reporteGuardia->quien_recibe }}</p>
            <p><strong>Equipo entregado:</strong> {{ $equipo ?? 'No disponible' }}</p>
        </div>
    </div>
</body>
</html>
