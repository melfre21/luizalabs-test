<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('codigo', 20);
            $table->string('nome', 150);
            $table->string('email', 150);
            $table->string('cpf', 11);
            $table->enum('sexo', ['M', 'F']);
            $table->string('senha');

            $table->string('telefone', 12);
            $table->string('cep', 8);
            $table->string('logradouro', 120);
            $table->string('numero', 10);
            $table->string('bairro', 80);
            $table->string('cidade', 70);
            $table->string('uf', 2);

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
        Schema::dropIfExists('clientes');
    }
}
