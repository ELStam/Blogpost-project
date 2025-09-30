<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Controller that handles all logic related to users.
 */
class UserController extends Controller
{
    /**
     * Return the currently authenticated user.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function current(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            return response()->json($user);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Return a list of all users.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $users = UserModel::all();
            return response()->json($users);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

}
