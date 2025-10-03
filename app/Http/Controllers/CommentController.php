<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\DeleteBlogRequest;
use App\Http\Requests\Comments\CreateCommentRequest;
use App\Http\Requests\Comments\DeleteCommentRequest;
use App\Models\BlogModel;
use App\Models\CommentModel;
use Exception;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    // Haal alle comments van een blog op
    public function index($blogId): JsonResponse
    {
        try {
            $comments = CommentModel::with('user')
                ->where('blog_id', $blogId)
                ->get();

            return response()->json([
                'message' => 'Comments retrieved successfully.',
                'comments' => $comments
            ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    // Maak een nieuwe comment
    public function store(CreateCommentRequest $request, BlogModel $blog): JsonResponse
    {
        try {
            $validated = $request->validated();
            $validated['user_id'] = auth()->id();
            $validated['blog_id'] = $blog->id;

            $comment = CommentModel::create($validated);
            $comment->load('user');

            return response()->json([
                'message' => 'Comment successfully created!',
                'comment' => $comment
            ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    // Verwijder een comment
    public function destroy(DeleteCommentRequest $request, CommentModel $comment): JsonResponse
    {
        try {
            $comment->delete();

            return response()->json([
                'message' => 'Comment deleted'
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }


}
