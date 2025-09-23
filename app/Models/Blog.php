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

    public function user(): BelongsTo // Relatie: een blog hoort bij een gebruiker

    {
        return $this->belongsTo(User::class); // Verbindt de blog met het User-model
    }

    public function categories(): BelongsToMany // Relatie: een blog kan meerdere categorieën hebben
    {
        return $this->belongsToMany(Category::class); // Verbindt de blog met het Category-model
    }

}
