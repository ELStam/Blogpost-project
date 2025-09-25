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

    /**
     * Relatie: een blog hoort bij een gebruiker
     */
    public function user(): BelongsTo

    {
        /**
         *  Verbindt de blog met het User-model
         */
        return $this->belongsTo(User::class);
    }

    /**
     * Relatie: een blog kan meerdere categorieën hebben
     */
    public function categories(): BelongsToMany
    {
        /**
         * Verbindt de blog met het Category-model
         */
        return $this->belongsToMany(Category::class);
    }

}
