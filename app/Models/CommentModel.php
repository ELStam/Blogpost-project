<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CommentModel extends Model
{
    /**
     * @var list<string>
     */
    protected $fillable = [
        'blog_id',
        'body',
        'user_id'
    ];

    /**
     * Relation with the Blog model.
     *
     * @return BelongsTo
     */
    public function blog(): BelongsTo
    {
        return $this->belongsTo(BlogModel::class);
    }

    /**
     * Relation with the User model.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class);
    }

}
