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

            $table->string('telefone', 12)->notNullable();
            $table->string('cep', 8)->notNullable();
            $table->string('logradouro', 120)->notNullable();
            $table->string('numero', 10)->notNullable();
            $table->string('bairro', 80)->notNullable();
            $table->string('cidade', 70)->notNullable();
            $table->string('uf', 2)->notNullable();

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
