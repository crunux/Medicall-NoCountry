<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            'name' => "product 1",
            'description' => "Description 1",
            'price' => 980
        ]);
        
        DB::table('products')->insert([
            'name' => "product 2",
            'description' => "Description 2",
            'price' => 505
        ]);

        DB::table('products')->insert([
            'name' => "product 3",
            'description' => "Description 3",
            'price' => 1500
        ]);

    }
}
