<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserFollower extends Model
{
    protected $table = 'user_followers';

    protected $fillable = [
        'user_id',
        'follower_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
    
    public function follower(): BelongsTo
    {
        return $this->belongsTo(UserModel::class, 'follower_id');
    }
}
