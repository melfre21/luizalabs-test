<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ClienteRequest;
use App\Models\Cliente;
use Illuminate\Support\Facades\Validator;

class ClienteController extends Controller
{
    public function index(){
        $clientes = Cliente::all();

        return response()->json($clientes, 200);

    }

    public function store(Request $request){
        $dataForm = $request->all();

        $validator = Validator::make($dataForm, [
            "codigo"        => "required",
            "nome"          => "required",
            "email"         => "required|email",
            "cpf"           => "required|min:11|max:11",
            "sexo"          => "required",
            "senha"         => "required",
            "telefone"      => "required",
            "cep"           => "required",
            "logradouro"    => "required",
            "numero"        => "required",
            "bairro"        => "required",
            "cidade"        => "required",
            "uf"            => "required",
        ]);

        $dataForm['senha'] = bcrypt($dataForm['senha']);

        if( $validator->fails()){
            return $this->withErrors('Erros.', $validator->error);
        }

        $cliente = Cliente::create($dataForm);

        return response()->json([
            "success" => true,
            "message" => "Cliente criado com sucesso!.",
            "data" => $cliente
        ]);
    }

    public function show($id){
        $cliente = Cliente::find($id);

        if (is_null($cliente)) {
            return $this->sendError('Cliente não encontrado.');
        }

        return response()->json([
            "success" => true,
            "message" => "Cliente recuperado com sucesso.",
            "data" => $cliente
        ]);
    }

    public function update(Request $request, Cliente $cliente){
        $dataForm = $request->all();

        //$validated = $request->validated();

        $cliente->codigo    = $request->input('codigo');
        $cliente->nome      = $request->input('nome');
        $cliente->email     = $request->input('email');
        $cliente->cpf       = $request->input('cpf');
        $cliente->sexo      = $request->input('sexo');
        $cliente->save();

        return response()->json([
            "success" => true,
            "message" => "Cliente atualizado com sucesso.",
            "data" => $cliente
        ]);
    }

    public function destroy(Cliente $cliente){
        $cliente->delete();

        return response()->json([
            "success" => true,
            "message" => "Cliente excluido com sucesso.",
            "data" => $cliente
        ]);
    }
}
