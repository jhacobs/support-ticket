<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('creator_id')
                ->nullable()
                ->references('id')
                ->on('users')
                ->nullOnDelete();
            $table->foreignId('agent_id')
                ->nullable()
                ->references('id')
                ->on('users')
                ->nullOnDelete();
            $table->string('title');
            $table->text('message');
            $table->string('status');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
