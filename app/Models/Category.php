<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    protected $fillable = ['name'];

    public function blogs(): BelongsToMany // Relatie: een categorie hoort bij veel blogs (many-to-many)
    {
        return $this->belongsToMany(Blog::class); // verbindt dit model aan het Blog-model
    }

}
