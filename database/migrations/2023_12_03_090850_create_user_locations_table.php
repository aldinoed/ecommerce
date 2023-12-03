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
        Schema::create('user_location', function (Blueprint $table) {
            $table->string('location_id')->primary();
            $table->string('user_id');
            $table->string('location_name');
            $table->string('province_id');
            $table->string('district_id'); 
            $table->string('subdistrict_id');
            $table->string('village_id');
            $table->text('detail_location');
                    
            $table->foreign('user_id')->references('user_id')->on('user');
            $table->foreign('province_id')->references('province_id')->on('province');
            $table->foreign('district_id')->references('district_id')->on('district');
            $table->foreign('subdistrict_id')->references('subdistrict_id')->on('subdistrict');
            $table->foreign('village_id')->references('village_id')->on('village');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_location');
    }
};
