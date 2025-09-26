<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CategoryModel extends Model
{
    protected $fillable = ['name'];
    
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany(BlogModel::class); // verbindt dit model aan het Blog-model
    }

}
