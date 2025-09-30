<?php

namespace App\Policies;

use App\Models\BlogModel;
use App\Models\UserModel;
use Illuminate\Auth\Access\Response;

/**
 * Policy that handles everything related to blog requests.
 */
class BlogPolicy
{
    /**
     * Determine whether the user can create models.
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
     * Determine whether the user can update the model.
     *
     * @param UserModel $user
     * @param BlogModel $blog
     *
     * @return Response
     */
    public function update(UserModel $user, BlogModel $blog): Response
    {
        return $user->id === $blog->user_id
            ? Response::allow()
            : Response::denyWithStatus(403);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param UserModel $user
     * @param BlogModel $blog
     *
     * @return Response
     */
    public function delete(UserModel $user, BlogModel $blog): Response
    {
        return $user->id === $blog->user_id
            ? Response::allow()
            : Response::denyWithStatus(403);

    }

}
