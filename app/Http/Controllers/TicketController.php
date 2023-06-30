<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TicketController extends Controller
{
    public function index(): Response
    {
        $tickets = Ticket::open()->paginate();

        return Inertia::render('Ticket/Index', [
            'tickets' => $tickets
        ]);
    }
}
