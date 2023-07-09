<?php

namespace Database\Factories;

use App\Enums\TicketStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->word,
            'message' => $this->faker->text,
            'status' => TicketStatus::Open,
            'creator_id' => User::factory(),
        ];
    }
}
