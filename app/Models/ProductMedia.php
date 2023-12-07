<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMedia extends Model
{
    use HasFactory;

    // protected $mediaDefault = [
    //     "media_sequence" => 1,
    // ];
    protected $fillable = ['media_id','media_file','product_id','media_sequence'];
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
