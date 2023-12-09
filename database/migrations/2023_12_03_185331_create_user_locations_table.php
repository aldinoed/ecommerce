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
        Schema::create('user_locations', function (Blueprint $table) {
            $table->string('location_id')->primary();
            $table->string('user_id');
            $table->string('location_name');
            $table->string('province_id');
            $table->string('district_id'); 
            $table->string('subdistrict_id');
            $table->string('village_id');
            $table->text('detail_location');
            $table->timestamps();
                    
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('province_id')->references('province_id')->on('provinces');
            $table->foreign('district_id')->references('district_id')->on('districts');
            $table->foreign('subdistrict_id')->references('subdistrict_id')->on('subdistricts');
            $table->foreign('village_id')->references('village_id')->on('villages');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_locations');
    }
};
