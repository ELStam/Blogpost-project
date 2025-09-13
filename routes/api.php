<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * GET /api/users
 * Example route: returns a list of users in JSON format.
 * This route is name 'users.index' so it can be referenced with Ziggy
 * in the frontend (e.g. route('users.index)).
 */
Route::get('users', [UserController::class, 'index'])->name('users.index');
