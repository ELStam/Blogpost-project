<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\CreateBlogRequest;
use App\Http\Requests\Blog\DeleteBlogRequest;
use App\Models\Blog;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return response()
            ->json(Blog::with('user')->latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBlogRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $validated['user_id'] = auth()->id();

        $blog = Blog::create($validated);

        return response()->json([
            'message' => 'Blog created successfully',
            'blog' => $blog
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog): JsonResponse
    {
        return response()->json($blog->load('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteBlogRequest $request, Blog $blog): JsonResponse
    {
        $blog->delete();

        return response()->json([
            'message' => 'Blog deleted'
        ]);
    }
}
