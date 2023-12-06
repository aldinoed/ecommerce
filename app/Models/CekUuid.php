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

    // public static function cekUuid($validUserId){
    //     $userIdData = UserId::where('user_id', $validUserId)->orWhere('user_id', '=', 0)->first();
    //     return $userIdData;
    // }
}
