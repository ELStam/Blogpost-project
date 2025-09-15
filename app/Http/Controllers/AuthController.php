<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Mockery\Exception;

class AuthController extends Controller
{
    /**
     * Register a new account
     *
     * This method handles user registration by validating the incoming request using
     * the RegisterRequest, creating a new user record for the database,
     * hashing the password, generating a personal access token.
     *
     * @param RegisterRequest $request
     * @return \Illuminate\Http\JsonResponse JSON response containing:
     *      - 'auth_token': the generated Sanctum token for API authentication
     *      - 'user' => the created user object
     */
    public function register(RegisterRequest $request) {
        $user = User::create([
            'name' =>  $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'confirm_password' => Hash::make($request->confirm_password)
        ]);

        try {
            $token = $user->createToken('auth_token')->plainTextToken;
        } catch (Exception $e) {
            return response()-json(['Error'=> 'Could not create token'], 500);
        }

        return response()->json([
            'auth_token' => $token,
            'user' => $user
        ]);
    }
}

