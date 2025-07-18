<?php

namespace App\Http\Controllers;

use App\Mail\SolicitudMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CorreoController extends Controller
{
    public function enviar(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'mensaje' => 'required|string',
            'nombre' => 'required|string',
        ]);

        try {
            $asunto = 'Solicitud sobre el observatorio turístico de Durango';

            Mail::to('clusturdgo2410@gmail.com')->send(new SolicitudMailable($asunto, $request->mensaje, $request->nombre, $request->email));
            return response()->json(['message' => 'Correo enviado correctamente']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al enviar el correo', 'error' => $e->getMessage()], 500);
        }
    }
}