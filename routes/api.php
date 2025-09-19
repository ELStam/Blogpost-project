<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

/**
 * GET /api/users
 * Example route: returns a list of users in JSON format.
 * This route is name 'users.index' so it can be referenced with Ziggy
 * in the frontend (e.g. route('users.index)).
 */

//Route::get('/', [HomeController::class, 'index']);

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('blogs', [BlogController::class, 'index'])->name('blogs.index');

Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('blogs', [BlogController::class, 'store'])->name('blogs.store');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});


