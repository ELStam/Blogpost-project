<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');

Route::post('uploadtest', [BlogController::class, 'uploadtest'])->name('uploadtest');

Route::middleware('auth:sanctum')->group(function () {
    // Blogs
    Route::post('blogs', [BlogController::class, 'store'])->name('blogs.store');
    Route::get('blogs', [BlogController::class, 'index'])->name('blogs.index');
    Route::get('blogs/{blog}', [BlogController::class, 'show'])->name('blogs.show');
    Route::put('blogs/{blog}', [BlogController::class, 'update'])->name('blogs.update');
    Route::delete('blogs/{blog}', [BlogController::class, 'destroy'])->name('blogs.destroy');

    Route::post('blogs/{blog}/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::get('blogs/{blog}/comments', [CommentController::class, 'index'])->name('comments.index');
    Route::delete('blogs/{blog}/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');

    Route::get('/user', [UserController::class, 'current'])->name('user.current');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
