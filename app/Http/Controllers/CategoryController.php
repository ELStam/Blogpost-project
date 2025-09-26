<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CategoryModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }
}
