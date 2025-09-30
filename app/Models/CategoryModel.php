<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Model for all category related data
 */
class CategoryModel extends Model
{
    protected $table = 'categories';

    protected $fillable = ['name'];

    /**
     * Declares the relation to the blogs
     *
     * @return BelongsToMany
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany(
            BlogModel::class,
            'blogs_categories',
            'category_id',
            'blog_id'
        );
    }
}
