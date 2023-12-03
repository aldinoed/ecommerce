<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $orderDefault = [
        "voucher_id" => null,
        "transaction_file" => null,
        "is_confirmed" => false,
        "waybill" => null,
        "is_received" => false,
    ];

    public function carts(){
        return $this->hasMany(Cart::class);
    }
    public function review(){
        return $this->hasMany(Review::class);
    }
    public function voucher(){
        return $this->belongsTo(Voucher::class);
    }
}
