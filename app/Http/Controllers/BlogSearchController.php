<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
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

        if (!$query) {
            return response()->json([
                'message' => 'No search query provided.',
                'blogs' => [],
            ]);
        }

        $blogs = $this->getBlogs($query);

        return response()->json([
            'blogs' => $blogs,
        ]);
    }

    /**
     * Search blogs by title.
     *
     * @param string $query
     * @return Collection
     */
    private function getBlogs(string $query): Collection
    {
        return BlogModel::where('title', 'LIKE', '%' . $query . '%')->get();
    }
}
