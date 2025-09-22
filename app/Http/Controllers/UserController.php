<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display all users in JSON.
     */
    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * Return the currently authenticated user.
     */
    public function current(Request $request)
    {
        return response()->json($request->user());
    }
}
