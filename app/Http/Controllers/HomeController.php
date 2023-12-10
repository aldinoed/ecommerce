<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function search(Request $request){
    // // $search = $request->get("search");
    // return Inertia::render('AdminHome');
    // }
    public function home(){
        // $search = $request->get("search");
        return Inertia::render('Home', [
            'auth' => [
                'check' => auth()->check(),
                'user' => auth()->user(),
            ],
        ]);
    }

    public function user(){
        return Inertia::render('UserDashboard');
    }
    public function searchProduct(){
        // return Inertia::render
    }
    public function specificProduct(){
        return Inertia::render('Home');
    }
}
