<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\CreateBlogRequest;
use App\Http\Requests\Blog\DeleteBlogRequest;
use App\Http\Requests\Blog\UpdateBlogRequest;
use App\Models\Blog;
use App\Models\BlogModel;
use File;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the blogs.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $blogs = BlogModel::with(['user', 'categories'])->get();

            return response()->json([
                'message' => 'Blogs retrieved successfully.',
                'blogs' => $blogs
            ], 200);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created blog with categories.
     * The categories can be added based on the id.
     *
     * @param CreateBlogRequest $request
     * @return JsonResponse
     */
    public function store(CreateBlogRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();

            $validated['user_id'] = auth()->id();

            $blog = BlogModel::create($validated);

            $blog->categories()->attach($validated['categories_id']);

            $blog->load('categories');

            return response()->json([
                'message' => 'Blog created successfully',
                'blog' => $blog
            ], 201);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified blog.
     *
     * @param Blog $blog
     * @return JsonResponse
     */
    public function show(Blog $blog): JsonResponse
    {
        try {
            $blog->load(['user', 'categories']);
            return response()->json([
                'message' => 'Blog retrieved successfully',
                'blog' => $blog
            ], 200);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified blog wit the categories.
     * Categories can be updated based on the id.
     *
     * @param UpdateBlogRequest $request
     * @param Blog $blog
     * @return JsonResponse
     */
    public function update(UpdateBlogRequest $request, Blog $blog): JsonResponse
    {
        try {
            $blog->update($request->validated());
            $blog->categories()->sync($request['categories_id']);
            $blog->load('categories');

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
     * Remove the specified blog.
     *
     * @param DeleteBlogRequest $request
     * @param Blog $blog
     * @return JsonResponse
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

    public function uploadTest(Request $request)
    {
        $originalName = $request->file('file')->getClientOriginalName();
        $path = "blog/1";
        $fileStorage = Storage::disk('public')->putFileAs($path, $request->file, $originalName);
    }
}
