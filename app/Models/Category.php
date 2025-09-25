<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    protected $fillable = ['name'];


    /**
     * Relatie: een categorie hoort bij veel blogs (many-to-many)
     */
    public function blogs(): BelongsToMany
    {
        /**
         * verbindt dit model aan het Blog-model
         */
        return $this->belongsToMany(Blog::class);
    }

}
