<?php

use App\Models\UserLocation;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('user_id')->primary();
            $table->string('username');
            $table->string('fullname');
            $table->string('password');
            $table->string('email');
            $table->string('loyalty_id')->nullable();
            $table->integer('amount_order');
            $table->string('phone_number')->nullable();
            $table->enum('user_role', ['admin', 'customer']);
            $table->string('image_profile')->nullable();  
            $table->timestamps();
            
            $table->foreign('loyalty_id')->references('loyalty_id')->on('user_loyalties');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
