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
        Schema::create('products', function (Blueprint $table) {
            $table->string('product_id')->primary();
            $table->string('product_name');
            $table->text('description');
            $table->string('category_id');
            $table->string('brand_id');
            $table->double('product_price');
            $table->integer('product_stock');
            $table->double('product_weight');
            $table->integer('sold_amount');
            $table->timestamps();
            $table->foreign('category_id')->references('category_id')->on('categories');
            $table->foreign('brand_id')->references('brand_id')->on('product_brands');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
