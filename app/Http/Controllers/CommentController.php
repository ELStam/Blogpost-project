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
     * @returns JsonResponse
     */
    public function index(): JsonResponse
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @returns JsonResponse
     */
    public function store(CreateCommentRequest $request, BlogModel $blog): JsonResponse
    {
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
