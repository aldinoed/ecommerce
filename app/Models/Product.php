<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function brand(){
        return $this->belongsTo(ProductBrand::class);
    }
    
    public function productMedias(){
        return $this->hasMany(ProductMedia::class);
    }
    public function carts(){
        return $this->hasMany(Cart::class);
    }
}
