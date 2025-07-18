@php
    use Carbon\Carbon;

    $guardiaNombre = $reporteIncidente->guardia->nombre ?? 'No disponible';
    $guardiaApellido = $reporteIncidente->guardia->apellido_p ?? 'No disponible';
    $guardiaApellidoMat = $reporteIncidente->guardia->apellido_m ?? 'No disponible';
    $guardiaNumEmpleado = $reporteIncidente->guardia->numero_empleado ?? 'No disponible';
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte del incidente {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</title>
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

        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .table, .table th, .table td {
            border: 1px solid #ddd;
        }

        .table th, .table td {
            padding: 10px;
            text-align: left;
        }

        .table th {
            background-color: #f2f2f2;
            color: #333;
        }

        .table td {
            font-size: 13px;
        }

        .comments, .location {
            font-style: italic;
        }

        /* Estilo para los renglones en descripción y recomendaciones */
        .text-area {
            width: 100%;
            height: 60px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 13px;
            line-height: 1.5;
        }

        .photo-container {
            text-align: center;
            margin-top: 20px;
        }

        .photo {
            width: 400px;
            height: 300px;
            border-radius: 8px;
        }

        .success {
            background-color: #1f964d;
            padding: 3px 8px;
            border-radius: 5px;
            color: white;
        }

        .danger {
            background-color: #e02525;
            padding: 3px 8px;
            border-radius: 5px;
            color: white;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Reporte del incidente</h1>
        <p>Fecha de generación: {{ Carbon::now()->format('d/m/Y h:i:s A') }}</p>
    </div>

    <div class="container">
        <div class="info">
            <h2>Detalles del guardia</h2>
            <p><strong>Orden de servicio:</strong> {{ $reporteIncidente->orden_servicio->codigo_orden_servicio }}</p>
            <p><strong>Guardia:</strong> {{ $guardiaNombre }} {{ $guardiaApellido }} {{ $guardiaApellidoMat }} ({{ $guardiaNumEmpleado }})</p>
            <p><strong>Punto de vigilancia:</strong> {{ $reporteIncidente->punto_vigilancia ?? 'No disponible' }}</p>
            <p><strong>Turno:</strong> {{ $reporteIncidente->turno }}</p>
            <p><strong>Fecha del incidente:</strong> {{ Carbon::parse($reporteIncidente->fecha)->format('d/m/Y h:i:s A') }}</p>
            <p>
                <strong>Estado:</strong>
                @if ($reporteIncidente->estado === 'Pendiente')
                    <span class="danger">{{ $reporteIncidente->estado }}</span>
                @else
                    <span class="success">{{ $reporteIncidente->estado }}</span>
                @endif
            </p>
        </div>

        <div class="info">
            <h2>Detalles del incidente</h2>
            <p><strong>Incidente:</strong> {{ $reporteIncidente->incidente ?? 'No disponible' }}</p>
            <p><strong>Descripción:</strong> {{ $reporteIncidente->descripcion ?? 'No disponible' }}</p>
            <p><strong>Ubicación:</strong> {{ $reporteIncidente->ubicacion ?? 'No disponible' }}</p>
            <p><strong>Causa:</strong> {{ $reporteIncidente->causa ?? 'No disponible' }}</p>
            <p><strong>¿Quién reporta?:</strong> {{ $reporteIncidente->quien_reporta ?? 'No disponible' }}</p>
        </div>

        <div class="info">
            <h2>Lugar del incidente</h2>
            <p style="text-align: center;">{{ $reporteIncidente->lugar_incidente ?? 'No disponible' }}</p>
        </div>

        <div class="info">
            <h2>Acciones y Recomendaciones</h2>
            <p><strong>Acciones tomadas:</strong></p>
            <div class="text-area">{{ $reporteIncidente->acciones ?? 'No disponible' }}</div>

            <p><strong>Recomendaciones:</strong></p>
            <div class="text-area">{{ $reporteIncidente->recomendaciones ?? 'No disponible' }}</div>
        </div>

        <div style="page-break-inside: avoid;">
        <h2>Foto del incidente</h2>
            @if($base64Foto)
                <div class="photo-container">
                    <img class="photo" src="{{ $base64Foto }}" alt="Foto del Incidente">
                </div>
                @else
                <p>No hay foto disponible.</p>
            @endif
        </div>
    </div>
</body>
</html>
