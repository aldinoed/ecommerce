<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CekUuid extends Model
{
    use HasFactory;
    public static function cekUserUuid($validUserId){
        $userIdData = UserId::where('user_id', $validUserId)->orWhere('user_id', '=', 0)->first();
        return $userIdData;
    }
    public static function cekProdukUuid($validProdukId){
        $productIdData = Product::where('product_id', $validProdukId)->orWhere('product_id', '=', 0)->first();
        return $productIdData;
    }

    // public static function cekUuid($validUserId){
    //     $userIdData = UserId::where('user_id', $validUserId)->orWhere('user_id', '=', 0)->first();
    //     return $userIdData;
    // }
}
