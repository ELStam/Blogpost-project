<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\BlogModel;

/**
 * Controller that handles all logic related to Searching.
 */
class BlogSearchController extends Controller
{
    /**
     * Handle blog search requests.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function search(Request $request): JsonResponse
    {
        $query = $request->query('title');

        $blogs = BlogModel::query()->with(['user', 'categories']);

        if ($query) {
            $blogs->where(function ($q) use ($query) {
                $q->where('title', 'LIKE', "%{$query}%");
            });
        }


        return response()->json([
            'message' => $query ? 'Filtered blogs' : 'All blogs',
            'blogs' => $blogs->get()
        ]);
    }
}
