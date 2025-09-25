<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('followers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('follower_id');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->foreign('follower_id')
                ->references('id')->on('users')
                ->onDelete('no action');  // of ->onDelete('restrict');

            $table->unique(['user_id', 'follower_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('followers');
    }
};
