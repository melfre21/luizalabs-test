<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\ProdutoController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// List clientes
Route::get('clientes', [ClienteController::class, 'index']);

// List unico cliente
Route::get('cliente/{id}', [ClienteController::class, 'show']);

// Criar cliente
Route::post('clientes', [ClienteController::class, 'store']);

// Atualizar cliente
Route::put('cliente/{id}', [ClienteController::class, 'update']);

// Deletar cliente
Route::delete('cliente/{id}', [ClienteController::class,'destroy']);


// List produto
Route::get('produtos', [ProdutoController::class, 'index']);

// List unico produto
Route::get('produto/{id}', [ProdutoController::class, 'show']);

// Criar produto
Route::post('produtos', [ProdutoController::class, 'store']);

// Atualizar produto
Route::put('produto/{id}', [ProdutoController::class, 'update']);

// Deletar produto
Route::delete('produto/{id}', [ProdutoController::class,'destroy']);
