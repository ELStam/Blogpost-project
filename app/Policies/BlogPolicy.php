<?php

namespace App\Policies;

use App\Models\Blog;
use App\Models\BlogModel;
use App\Models\User;
use App\Models\UserModel;
use Illuminate\Auth\Access\Response;

class BlogPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(UserModel $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(UserModel $user, Blog $blog): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(UserModel $user): Response
    {
        return $user !== null
            ? Response::allow()
            : Response::denyWithStatus(403);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(UserModel $user, BlogModel $blog): Response
    {
        return $user->id === $blog->user_id
            ? Response::allow()
            : Response::denyWithStatus(403);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(UserModel $user, BlogModel $blog): Response
    {
        return $user->id === $blog->user_id
            ? Response::allow()
            : Response::denyWithStatus(403);

    }

}
