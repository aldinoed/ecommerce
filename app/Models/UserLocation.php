<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLocation extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }
       
    public function province(){
       return $this->belongsTo(Province::class);
    }
       
    public function district(){
       return $this->belongsTo(District::class);
    }
       
    public function subdistrict(){
       return $this->belongsTo(Subdistrict::class);
    }
       
    public function village(){
       return $this->belongsTo(Village::class);
    }
}
