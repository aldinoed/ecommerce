<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function search(Request $request){
    // // $search = $request->get("search");
    // return Inertia::render('AdminHome');
    // }
    public function home(){
        // $search = $request->get("search");
        return Inertia::render('Home');
    }

    public function searchProduct(){
        // return Inertia::render
    }
}
