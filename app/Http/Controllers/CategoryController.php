<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use Exception;
use Illuminate\Http\JsonResponse;

/**
 * Controller that handles all logic related to categories.
 */
class CategoryController extends Controller
{
    /**
     * Display a listing of the categories.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $categories = CategoryModel::all();
            return response()->json([
                'message' => 'Categories retrieved successfully',
                'categories' => $categories
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }
}
