@php
    use Carbon\Carbon;

    $nombre = $checkGuardia->nombre_guardia ?? "{$checkGuardia->guardia->nombre} {$checkGuardia->guardia->apellido_p} {$checkGuardia->guardia->apellido_m} ({$checkGuardia->guardia->numero_empleado})";
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de Check-in/out del guardia {{ $nombre }}</title>
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

        h1 {
            font-size: 25px;
        }

        h2 {
            font-size: 20px;
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

        .header p {
            font-size: 14px;
        }

        .info {
            margin-bottom: 20px;
        }

        .info p {
            margin: 5px 0;
            font-size: 13px;
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

        .photo-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            text-align: center;
        }

        .photo-table, .photo-table th, .photo-table td {
            border: 1px solid #ddd;
        }

        .photo-table th, .photo-table td {
            padding: 10px;
            font-size: 13px;
        }

        .photo-table th {
            background-color: #f2f2f2;
            color: #333;
        }

        .photo-table img {
            width: 200px;
            height: 150px;
            border-radius: 8px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Reporte de Check-in/out del guardia</h1>
        <p>Fecha de generación: {{ Carbon::now()->format('d/m/Y h:i:s A') }}</p>
    </div>

    <div class="container">
        <h2>Detalles del guardia</h2>
        <div class="info">
            <p><strong>Orden de servicio:</strong> {{ $checkGuardia->orden_servicio->codigo_orden_servicio }}</p>
            <p><strong>Guardia:</strong> {{ $nombre ?? 'No disponible' }}</p>
            <p><strong>Tipo de Guardia:</strong> {{ $checkGuardia->tipo_guardia }}</p>
            <p><strong>Fecha de Entrada:</strong> {{ Carbon::parse($checkGuardia->fecha_entrada)->format('d/m/Y h:i:s A') }}</p>
            <p><strong>Fecha de Salida:</strong> {{ $checkGuardia->fecha_salida ? Carbon::parse($checkGuardia->fecha_salida)->format('d/m/Y h:i:s A') : 'Sin check-out' }}</p>
        </div>

        <h2>Ubicación y comentarios</h2>
        <div class="info">
            <p><strong>Ubicación:</strong> {{ $checkGuardia->ubicacion }}</p>
            <p class="comments"><strong>Comentarios:</strong> {{ $checkGuardia->comentarios ?? 'No hay comentarios' }}</p>
        </div>

        <h2>Coordenadas de la ubicación</h2>
        <div class="info">
            <p><strong>Latitud:</strong> {{ $checkGuardia->latitude }}</p>
            <p><strong>Longitud:</strong> {{ $checkGuardia->longitude }}</p>
        </div>

        <div style="page-break-inside: avoid;">
            <h2>Foto(s)</h2>
            <table class="photo-table">
                <tr>
                    @foreach($base64Fotos as $foto)
                    <td>
                        <img src="{{ $foto }}" alt="Foto del Guardia">
                    </td>
                    @endforeach
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
