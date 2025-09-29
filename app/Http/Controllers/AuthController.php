<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\UserModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
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
     * @return JsonResponse JSON response containing:
     *      - 'auth_token' => the generated Sanctum token for API authentication
     *      - 'user' => the created user object
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = UserModel::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'bio' => $request->bio,
            'password' => Hash::make($request->password),
            'confirm_password' => Hash::make($request->confirm_password)
        ]);

        try {
            $token = $user->createToken('auth_token')->plainTextToken;
        } catch (Exception $e) {
            return response()->json(['Error' => 'Could not create token'], 500);
        }

        return response()->json([
            'auth_token' => $token,
            'user' => $user
        ]);
    }

    /**
     * Handle user login
     *
     * This method authenticates a user based on the username and password.
     * If the credentials are valid, it generated a personal access token.
     *
     * @param LoginRequest $request
     * @return JsonResponse JSON response containing:
     *      - 'message' => if the user is succesfully logged in
     *      - 'auth_token' => the generated Sanctum token for the API authentication
     *      - 'user' => the created user object
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $user = UserModel::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login succesful!',
            'auth_token' => $token,
            'user' => $user
        ]);
    }

    /**
     * Log out the authenticated user by deleting their current Sanctum token.
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out succesfully!',
        ]);
    }
}

