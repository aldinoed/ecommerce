<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
    public function indexUserProfile(){
        return Inertia::render('UserDashboard');
    }
    public function indexUserTransaction(){
        return Inertia::render('UserDashboard');
    }
}
