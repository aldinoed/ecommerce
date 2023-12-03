<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // protected $guarded = ['user_id'];
    protected $amount_order = [
        'amount_order' => 0
    ];
    public function userLocations(){
        return $this->hasMany(UserLocation::class);
    }   
    public function carts(){
        return $this->hasMany(Cart::class);
    }   
    public function reviews(){
        return $this->hasMany(Cart::class);
    }   

    public function loyalty(){
        return $this->belongsTo(UserLoyalty::class);
    }
}
