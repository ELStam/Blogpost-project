<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Milan Sebes',
                'username' => 'MilanoGamezzNL',
                'email' => 'milan@intermixmanagement.nl',
                'password' => Hash::make('password'),
                'bio' => 'Gekke streamer',
                'followers' => 69,
                'following' => 262,
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Esmee Stam',
                'username' => 'esmeetjeee',
                'email' => 'esmee@intermixmanagement.nl',
                'password' => Hash::make('password'),
                'bio' => 'Crazyy Fan van BTS & TXT.',
                'followers' => 200,
                'following' => 1000,
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'John Doe',
                'username' => 'JohnDoe',
                'email' => 'johndoe@example.com',
                'password' => Hash::make('password'),
                'bio' => 'bio',
                'followers' => 2,
                'following' => 32,
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
