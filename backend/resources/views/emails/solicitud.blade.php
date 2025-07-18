<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Observatorio Turístico de Durango</title>

    <style>
        .info-a {
            transition: .3s opacity;
        }

        .info-a:hover{
            opacity: 0.8;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 0 auto; background-color: #ffffff; border-radius: 8px 8px 0 0;">
                    <tr>
                        <td style="padding: 25px; text-align: center; background-color: #ff6900; border-radius: 8px 8px 0 0;">
                            <div style="margin-bottom: 10px">
                                <img src="{{asset('logo/logotipo_fondo.jpg')}}" alt="Logo del OTD" width="100">
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 25px;">¡SOLICITUD PARA EL OBSERVATORIO TURÍSTICO DE DURANGO!</h1>
                        </td>
                    </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 0 auto; background-color: #ffffff;">
                    <tr>
                        <td style="padding: 30px 25px 20px 25px;">
                            <p style="margin-top: 0; font-size: 17px; margin-bottom: 5px; font-weight: bold;">
                                Nombre: <span style="font-weight: normal;">{{$nombre}}</span>
                            </p>
                            <p style="margin-top: 0; font-size: 17px; margin-bottom: 20px; font-weight: bold;">
                                Correo: <span style="font-weight: normal">{{$correo}}</span>
                            </p>
                            <p style="line-height: 1.6; margin-bottom: 5rem; font-size: 15px; font-weight: 500;">{{$mensaje}}</p>

                            <p style="line-height: 1.6; margin-bottom: 0px; font-size: 13px">Saludos cordiales,</p>
                            <p style="line-height: 1.6; font-weight: bold; margin: 0 0 0 0; color: #e05d00; font-size: 13px">Solicitud a OTD</p>
                        </td>
                    </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 0 auto; background-color: #333333; border-radius: 0 0 8px 8px;">
                    <tr>
                        <td style="padding: 20px; text-align: center; color: #ffffff;">
                            <p style="margin: 0; font-size: 12px;">© {{\Carbon\Carbon::now()->year}} Todos los derechos reservados.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
