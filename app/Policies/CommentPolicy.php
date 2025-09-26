<?php

namespace App\Policies;

use App\Models\BlogModel;
use App\Models\CommentModel;
use App\Models\UserModel;
use Illuminate\Auth\Access\Response;

class CommentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(UserModel $user): Response
    {
        return $user !== null
            ? Response::allow()
            : Response::denyWithStatus(403);
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
     * Determine whether the user can delete the model.
     */
    public function delete(UserModel $user, CommentModel $comment, BlogModel $blog): bool
    {
        return false;
    }
}
