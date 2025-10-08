<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Model for all User related data
 */
class UserModel extends Authenticatable
{
    protected $table = 'users';

    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'username',
        'bio',
        'password',
    ];

    protected $hidden = [
        'password',
        'confirm_password',
        'remember_token',
    ];

    /**
     * Get the users who follow this user.
     *
     * @return BelongsToMany
     *
     */
    public function followers(): BelongsToMany
    {
        return $this->belongsToMany(UserModel::class, 'followers', 'user_id', 'follower_id');
    }

    /**
     * Get the users this user is following.
     *
     * @return BelongsToMany
     */
    public function following(): BelongsToMany
    {
        return $this->belongsToMany(UserModel::class, 'followers', 'follower_id', 'user_id');
    }

    /**
     * Get the blogs created by this user.
     *
     * @return HasMany
     */
    public function blogs(): HasMany
    {
        return $this->hasMany(BlogModel::class, 'user_id');
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
