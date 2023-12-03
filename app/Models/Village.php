<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    use HasFactory;

    public function subdistrict(){
        return $this->belongsTo(Subdistrict::class);
    }
    
    public function userLocations(){
        return $this->hasMany(UserLocation::class);
    }
}
