<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Box;
use App\Models\Cell;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $cells = Cell::factory(10)->create();
        $cells->each(function ($c) {
            $c->box()->save(Box::factory()->make());
        });

         User::factory()->create([
             'name' => 'admin',
             'email' => 'test@example.com',
             'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
         ]);

         User::factory(10)->create();
    }
}
