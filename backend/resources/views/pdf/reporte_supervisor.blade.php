@php
    use Carbon\Carbon;

    $guardiaNombre = $reporteSupervisor->guardia->nombre ?? 'No disponible';
    $guardiaApellido = $reporteSupervisor->guardia->apellido_p ?? 'No disponible';
    $guardiaApellidoMat = $reporteSupervisor->guardia->apellido_m ?? 'No disponible';
    $guardiaNumEmpleado = $reporteSupervisor->guardia->numero_empleado ?? 'No disponible';
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de supervisor {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</title>
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
            margin-bottom: 20px;
            page-break-inside: avoid;
        }

        .info p {
            margin: 5px 0;
            font-size: 14px;
        }

        li{
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

        .proyeccion-list {
            margin-top: 10px;
            padding-left: 20px;
            font-size: 13px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Reporte de supervisor</h1>
        <p>Fecha de generación: {{ Carbon::now()->format('d/m/Y h:i:s A') }}</p>
    </div>

    <div class="container">
        <div class="info">
            <h2>Detalles del supervisor</h2>
            <p><strong>Orden de servicio:</strong> {{ $reporteSupervisor->orden_servicio->codigo_orden_servicio }}</p>
            <p><strong>Guardia:</strong> {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</p>
            <p><strong>Zona:</strong> {{ $reporteSupervisor->zona }}</p>
            <p><strong>Turno:</strong> {{ $reporteSupervisor->turno }}</p>
            <p><strong>Fecha del reporte:</strong> {{ Carbon::parse($reporteSupervisor->fecha)->format('d/m/Y h:i:s A') }}</p>
        </div>

        <div class="info">
            <h2>Entrega de equipo</h2>
            <p><strong>Elemento que entrega el equipo:</strong> {{ $reporteSupervisor->quien_entrega }}</p>
            <p><strong>Elemento que recibe el equipo:</strong> {{ $reporteSupervisor->quien_recibe }}</p>
        </div>

        <div class="info">
            <h2>Proyección</h2>
            @if($reporteSupervisor->proyeccion)
                <ul class="proyeccion-list">
                    @foreach($reporteSupervisor->proyeccion as $item)
                        <li><strong>Cubre:</strong> {{ $item['cubre'] ?? 'No disponible' }}</li>
                        <li><strong>Faltas:</strong> {{ $item['faltas'] ?? 'No disponible' }}</li>
                        <li><strong>Servicio:</strong> {{ $item['servicio'] ?? 'No disponible' }}</li>
                    @endforeach
                </ul>
            @else
                <p>No hay observaciones disponibles.</p>
            @endif
        </div>

        <div class="info">
            <h2>Consignas</h2>
            @if($reporteSupervisor->consignas)
                @foreach($reporteSupervisor->consignas as $consigna)
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
            @if($reporteSupervisor->observaciones)
                @foreach($reporteSupervisor->observaciones as $observacion)
                    <div>
                        <span class="hora">{{ $observacion['hora'] }} hrs.</span>
                        <strong>Observación:</strong> {{ $observacion['texto'] }}
                    </div>
                @endforeach
            @else
                <p>No hay observaciones disponibles.</p>
            @endif
        </div>
    </div>
</body>
</html>
