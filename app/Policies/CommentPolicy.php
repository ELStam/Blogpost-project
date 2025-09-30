<?php

namespace App\Policies;

use App\Models\BlogModel;
use App\Models\CommentModel;
use App\Models\UserModel;
use Illuminate\Auth\Access\Response;

/**
 * Policy that handles everything related to comment requests.
 */
class CommentPolicy
{
    /**
     * Determine whether the user can view any comments.
     *
     * @param UserModel|null $user
     *
     * @return Response
     */
    public function viewAny(?UserModel $user): Response
    {
        return $user !== null
            ? Response::allow()
            : Response::denyWithStatus(403);
    }

    /**
     * Determine whether the user can create comments.
     *
     * @param UserModel|null $user
     *
     * @return Response
     */
    public function create(?UserModel $user): Response
    {
        return $user !== null
            ? Response::allow()
            : Response::denyWithStatus(403);
    }

    /**
     * Determine whether the user can delete the comment or if the owner of the
     * blog can delete the comment.
     *
     * @param UserModel $user
     * @param CommentModel $comment
     *
     * @return Response
     */
    public function delete(UserModel $user, CommentModel $comment): Response
    {
        return ($user->id === $comment->user_id || $user->id === $comment->blog->user_id)
            ? Response::allow()
            : Response::denyWithStatus(403);
    }
}
