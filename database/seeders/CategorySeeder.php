<?php

namespace Database\Seeders;

use App\Models\CategoryModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

/**
 * Seeds the Category table with initial data.
 *
 */
class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Creativiteit',
            'Cultuur',
            'Eten',
            'Lifestyle',
            'Muziek',
            'Sport',
            'Films'
        ];

        foreach ($categories as $category) {
            CategoryModel::create(['name' => $category]);
        }
    }
}
