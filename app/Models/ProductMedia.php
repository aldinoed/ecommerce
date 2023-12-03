<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMedia extends Model
{
    use HasFactory;

    protected $mediaDefault = [
        "media_sequence" => 1,
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
