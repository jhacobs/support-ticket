<?php

namespace App\Models;

use App\Enums\TicketStatus;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'message',
        'creator_id',
        'agent_id',
        'status'
    ];

    protected $casts = [
        'status' => TicketStatus::class
    ];

    public function scopeOpen(Builder $query): Builder
    {
        return $query->where('status', TicketStatus::Open->name);
    }

    public function scopeClosed(Builder $query): Builder
    {
        return $query->where('status', TicketStatus::Closed);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function agent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}
