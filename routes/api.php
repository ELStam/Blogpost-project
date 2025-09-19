<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/user', [UserController::class, 'current'])->name('user.current');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
