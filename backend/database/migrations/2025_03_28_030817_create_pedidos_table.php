<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->text('nombre_completo');
            $table->text('telefono');
            $table->text('calle_numero');
            $table->text('colonia_sector');
            $table->text('correo');
            $table->text('pedido');
            $table->timestamp('fecha_pedido_recibido')->useCurrent();
            $table->text('repartidor')->nullable();
            $table->timestamp('fecha_pedido_enviado')->nullable();
            $table->timestamp('fecha_aprox_envio_recibido')->nullable();
            $table->decimal('costo_total', 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
};
