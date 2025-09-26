<?php

namespace App\Providers;

use App\Models\BlogModel;
use App\Models\CommentModel;
use App\Policies\BlogPolicy;
use App\Policies\CommentPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Gate::policy(BlogModel::class, BlogPolicy::class);
        Gate::policy(CommentModel::class, CommentPolicy::class);
    }
}
