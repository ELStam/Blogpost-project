<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FollowController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('blogs/{blog}', [BlogController::class, 'show'])->name('blogs.show');

Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('blogs', [BlogController::class, 'store'])->name('blogs.store');
    Route::put('blogs/{blog}', [BlogController::class, 'update'])->name('blogs.update');
    Route::delete('blogs/{blog}', [BlogController::class, 'destroy'])->name('blogs.destroy');

    Route::get('/user', [UserController::class, 'current'])->name('user.current');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    
    Route::post('/follow/{userId}', [FollowController::class, 'follow'])->name('user.follow');
    Route::post('/unfollow/{userId}', [FollowController::class, 'unfollow'])->name('user.unfollow');
    Route::get('/followers', [FollowController::class, 'followers'])->name('user.followers');
    Route::get('/following', [FollowController::class, 'following'])->name('user.following');
});
