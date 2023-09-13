<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Box;
use App\Models\Cell;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // seedind all cells
        for ($i = 1; $i <= env('TOTAL_CELLS_COUNT'); $i++) {
            DB::table('cells')->insert([
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }

//         creating admin
         User::factory()->create([
             'name' => 'admin',
             'email' => 'test@example.com',
             'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
         ]);
    }
}
