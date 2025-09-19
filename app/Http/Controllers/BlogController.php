<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blog\CreateBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()
            ->json(Blog::with('user')->latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBlogRequest $request)
    {
        $blog = $request->user()
            ->blogs()
            ->create($request->only('title', 'body'));

        return response()->json([
            'message' => 'Blog created',
            'blog' => $blog
        ], 201);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return response()->json([
            'blog' => $blog->load('user')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
