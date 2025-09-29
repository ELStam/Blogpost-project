<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comments\CreateCommentRequest;
use App\Models\Blog;
use App\Models\BlogModel;
use App\Models\CommentModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the comments.
     *
     * @param BlogModel $blog
     *
     * @returns JsonResponse
     */
    public function index(BlogModel $blog): JsonResponse
    {
        try {
            $comments = $blog->comments()->with('user')->get();

            return response()->json([
                'comments' => $comments
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @returns JsonResponse
     */
    public function store(CreateCommentRequest $request, BlogModel $blog): JsonResponse
    {
        try {
            $validated = $request->validated();

            $validated['user_id'] = auth()->id();

            $comment = $blog->comments()->create($validated);

            return response()->json([
                'message' => 'Comment successfully created!',
                'comment' => $comment
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @returns JsonResponse
     */
    public function destroy(CommentModel $comment): JsonResponse
    {
        //
    }
}
