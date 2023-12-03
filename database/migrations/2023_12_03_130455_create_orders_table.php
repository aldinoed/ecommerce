<?php

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
        Schema::create('order', function (Blueprint $table) {
            $table->string('order_id');
            $table->string('cart_id');
            $table->string('voucher_id')->nullable();
            $table->string('transaction_file')->nullable();
            $table->boolean('is_confirmed');
            $table->timestamp('order_date');
            $table->double('total');
            $table->string('waybill');
            $table->boolean('is_received');

            $table->foreign('cart_id')->references('cart_id')->on('cart');
            $table->foreign('voucher_id')->references('voucher_id')->on('voucher');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
