<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\CreateBlogRequest;
use App\Http\Requests\Blog\DeleteBlogRequest;
use App\Http\Requests\Blog\UpdateBlogRequest;
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
        try {
            $blogs = Blog::with('user')->get();

            return response()->json([
                'message' => 'Blogs retrieved successfully.',
                'blogs' => $blogs
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBlogRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();

            $validated['user_id'] = auth()->id();

            $blog = Blog::create($validated);

            return response()->json([
                'message' => 'Blog created successfully',
                'blog' => $blog
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog): JsonResponse
    {
        try {
            $blog->load('user');
            return response()->json([
                'message' => 'Blog retrieved successfully',
                'blog' => $blog
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog): JsonResponse
    {
        try {
            $blog->update($request->validated());

            return response()->json([
                'message' => 'Blog updated succesfully',
                'blog' => $blog
            ], 201);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteBlogRequest $request, Blog $blog): JsonResponse
    {
        try {
            $blog->delete();

            return response()->json([
                'message' => 'Blog deleted'
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }
}
