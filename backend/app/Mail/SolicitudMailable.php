<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SolicitudMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $asunto;
    public $mensaje;
    public $nombre;
    public $correo;

    public function __construct($asunto, $mensaje, $nombre, $correo)
    {
        $this->asunto = $asunto;
        $this->mensaje = $mensaje;
        $this->nombre = $nombre;
        $this->correo = $correo;
    }

    public function envelope()
    {
        return new Envelope(
            from: new Address('otdclustur@unes.edu.mx', 'OTD'),
            subject: $this->asunto,
        );
    }

    public function content()
    {
        return new Content(
            view: 'emails.solicitud',
            with: [
                'mensaje' => $this->mensaje,
                'nombre' => $this->nombre,
                'correo' => $this->correo,
            ]
        );
    }

    public function attachments()
    {
        return [];
    }
}
