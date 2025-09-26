<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Esmée Stam',
            'username' => 'esmeetjeee',
            'email' => 'esmee@intermixmanagement.nl',
            'bio' => 'Stan BTS & TXT',
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'Milan Sebes',
            'username' => 'MilanoGamezzNL',
            'email' => 'milan@intermixmanagement.nl',
            'bio' => 'Gekke, crazy Streamer op Twitch',
            'password' => bcrypt('password'),
        ]);
    }
}
