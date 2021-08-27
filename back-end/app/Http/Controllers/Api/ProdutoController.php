<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Produto;
use Illuminate\Support\Facades\Validator;

class ProdutoController extends Controller
{
    public function index(){
        $produtos = Produto::all();

        return response()->json([
            "success"   => true,
            "message"   => "Listagem de Produtos",
            "data"      => $produtos
        ], 200);

    }

    public function store(Request $request){
        $dataForm = $request->all();

        $validator = Validator::make($dataForm, [
            "codigo"        => "required",
            "nome"          => "required",
            "fabricacao"    => "required",
            "tamanho"       => "required",
            "descricao"     => "required",
            "valor"         => "required"
        ]);
        

        if($validator->fails()){
            return  $validator->errors();
        }

        $produto = Produto::create($dataForm);
 
        return response()->json([
            "success" => true,
            "message" => "Produto criado com sucesso!.",
            "data" => $produto
        ]);
    }

    public function show($id){
        $produto = Produto::find($id);
   
        if (is_null($produto)) {
            return $this->sendError('Produto não encontrado.');
        }
         
        return response()->json([
            "success" => true,
            "message" => "Produto recuperado com sucesso.",
            "data" => $produto
        ]);
    }

    public function update(Request $request, $id){
        
        $produto = Produto::Find($id);

        if(!$produto){
            return response()->json(['Produto não encontrado!']);
        }

        $produto->codigo        = $request->input('codigo');
        $produto->nome          = $request->input('nome');
        $produto->fabricacao    = $request->input('fabricacao');
        $produto->tamanho       = $request->input('tamanho');
        $produto->descricao     = $request->input('descricao');
        $produto->valor         = $request->input('valor');
        $produto->save();
    
        return response()->json([
            "success" => true,
            "message" => "Produto atualizado com sucesso.",
            "data" => $produto
        ]);
    }

    public function destroy(Produto $produto){
        $produto->delete();
    
        return response()->json([
            "success" => true,
            "message" => "Produto excluido com sucesso.",
            "data" => $produto
        ]);
    }
}
