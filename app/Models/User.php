<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;


class User extends Model implements Authenticatable
{
    use HasApiTokens;
    use AuthenticatableTrait;
    // use ;
    use HasFactory;
    protected $fillable = ['id','email', 'username', 'fullname', 'password', 'is_admin'];
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
