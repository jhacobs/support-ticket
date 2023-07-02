<?php

use App\Models\Ticket;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('All tickets are shown on the tickets overview page', function () {
    $user = User::factory()->create();
    Ticket::factory()->count(2)->create();

    $response = $this
        ->actingAs($user)
        ->get(route('tickets.index'));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page
        ->has('tickets.data', 2)
    );
});
