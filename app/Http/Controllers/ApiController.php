<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\User;

class ApiController extends Controller
{
    public function categories(){
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }
    public function users(){
        $users = User::all();
        return response()->json(['users' => $users]);
    }
    public function destroyUser($userId){
        $user = User::where('user_id',$userId);

        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'Successfully delete user'], 200);
        // return response()->json(['message' => 'User not found'], 404);
    }
}
