<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Model for all blog related data
 */
class BlogModel extends Model
{
    protected $table = 'blogs';
    /**
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'banner',
        'introduction',
        'paragraph_title',
        'paragraph_body',
        'user_id'
    ];

    protected $casts = [
        'user_id' => 'int'
    ];

    /**
     * Declares the user relation to the blog.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class);
    }

    /**
     * Declares the category relations to the blog
     *
     * @return BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(
            CategoryModel::class,
            'blogs_categories',
            'blog_id',
            'category_id'
        );
    }


    /**
     * Relation with Comment model.
     *
     * Get all the blog's comments.
     *
     * @return HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(CommentModel::class, 'blog_id');
    }

}
