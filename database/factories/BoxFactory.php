<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Box>
 */
class BoxFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'invoice' => $this->faker->numberBetween(10000,99999),
        'cell' => $this->faker->unique()->numberBetween(1,24),
        'customer' => $this->faker->company(),
        'product' => $this->faker->sentence(),
        ];
    }
}
