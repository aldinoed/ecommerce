<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'product_name', 'description', 'category_id', 'brand_id', 'product_price', 'product_weight', 'product_stock', 'sold_amount'];
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
