<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['cart_id', 'user_id', 'product_id', 'quantity', 'order_id'];

    protected $defaultCart = [
        "order_id" => null,
    ];
    public function order(){
        return $this->belongsTo(Order::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
