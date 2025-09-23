<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Blog extends Model
{
    /**
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'body',
        'introduction',
        'paragraph_title',
        'paragraph_body',
        'user_id'
    ];

    protected $casts = [
        'user_id' => 'int'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
