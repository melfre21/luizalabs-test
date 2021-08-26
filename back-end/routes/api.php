<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ClienteController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// List clientes
Route::get('clientes', [ClienteController::class, 'index']);

// List unico cliente
Route::get('clientes/{id}', [ClienteController::class, 'show']);

// Criar cliente
Route::post('clientes', [ClienteController::class, 'store']);

// Atualizar cliente
Route::put('clientes/{id}', [ClienteController::class, 'update']);

// Deletar cliente
Route::delete('clientes/{id}', [ClienteController::class,'destroy']);
