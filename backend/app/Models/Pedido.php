<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasLogs;

class Pedido extends Model
{
    use HasFactory, HasLogs;

    protected $table = 'pedidos';

    protected $fillable = [
        'nombre_completo',
        'telefono',
        'calle_numero',
        'colonia_sector',
        'correo',
        'pedido',
        'fecha_pedido_recibido',
        'repartidor',
        'fecha_pedido_enviado',
        'fecha_aprox_envio_recibido',
        'costo_total',
    ];
}