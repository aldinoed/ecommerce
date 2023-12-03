<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLoyalty extends Model
{
    use HasFactory;

    public function users(){
        return $this->hasMany(User::class);
    }

    public function vourchers(){
        return $this->hasMany(Voucher::class);
    }
}
