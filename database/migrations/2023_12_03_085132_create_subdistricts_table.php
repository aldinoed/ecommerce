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
        Schema::create('subdistrict', function (Blueprint $table) {
            $table->string('subdistrict_id')->primary();
            $table->string('subdistrict_name');
            $table->string('district_id');
            $table->foreign('district_id')->references('district_id')->on('district');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subdistrict');
    }
};