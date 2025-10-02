<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comments\CreateCommentRequest;
use App\Http\Requests\Comments\DeleteCommentRequest;
use App\Models\BlogModel;
use App\Models\CommentModel;
use Exception;
use Illuminate\Http\JsonResponse;
use function Illuminate\Events\queueable;

/**
 * Controller that handles all logic related to comments.
 */
class CommentController extends Controller
{
    /**
     * Display a listing of the comments.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $comments = CommentModel::with()->with('user')->get();

            return response()->json([
                'message' => 'Comments retrieved successfully.',
                'comments' => $comments
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created comment in storage.
     *
     * @param CreateCommentRequest $request
     * @return JsonResponse
     */
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
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }


    /**
     * Display the specified comment.
     *
     * @param CommentModel $comment
     *
     * @return JsonResponse
     */
    public function show(CommentModel $comment): JsonResponse
    {
        try {
            $comment->load(['user']);

            return response()->json([
                'message' => 'Comment retrieved successfully.',
                'comment' => $comment
            ], 200);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);

        }
    }

    /**
     * Deletes the comment from the storage.
     *
     * @param DeleteCommentRequest $request
     * @param CommentModel $comment
     *
     * @return JsonResponse
     */
    public function destroy(DeleteCommentRequest $request, CommentModel $comment): JsonResponse
    {
        try {
            $comment->delete();

            return response()->json([
                'message' => 'Comment successfully deleted!'
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 500);
        }
    }
}
