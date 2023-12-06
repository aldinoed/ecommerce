<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Contracts\Auth\Authenticatable;
// use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Model
{
    // use AuthenticatableTrait;
    // use ;
    use HasFactory;
    protected $fillable = ['user_id','email', 'username', 'fullname', 'password'];
    protected $amount_order = [
        'amount_order' => 0
    ];
    public function userLocations(){
        return $this->hasMany(UserLocation::class);
    }
    public function searchs(){
        return $this->hasMany(SearchHistory::class);
    }
    public function userLoyalties(){
        return $this->belongsTo(UserLoyalty::class);
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
