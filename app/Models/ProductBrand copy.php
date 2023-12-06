<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBrand extends Model
{
    use HasFactory;

    protected $fillable = ['brand_id', 'brand_name', 'brand_image'];

    public function products(){
        return $this->hasMany(Product::class);
    }
}
