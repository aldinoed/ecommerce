<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    public function userMan(){
        return Inertia::render('InputBarang');
    }
    public function produkMan(){
        return Inertia::render('InputBarang');
    }
    public function transactionMan(){
        return view("");
    }
}
