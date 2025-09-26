<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class BlogModel extends Model
{
    protected $table = 'blogs';
    /**
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'introduction',
        'paragraph_title',
        'paragraph_body',
        'user_id'
    ];

    protected $casts = [
        'user_id' => 'int'
    ];

    public function user(): BelongsTo // Relatie: een blog hoort bij een gebruiker

    {
        return $this->belongsTo(UserModel::class); // Verbindt de blog met het User-model
    }

    public function categories(): BelongsToMany // Relatie: een blog kan meerdere categorieën hebben
    {
        return $this->belongsToMany(CategoryModel::class); // Verbindt de blog met het Category-model
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
        return $this->hasMany(CommentModel::class);
    }

}
