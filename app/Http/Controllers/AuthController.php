<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\UserId;
use App\Models\CekUuid;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(){
        return Inertia::render('Autentikasi');
    }

    public function authenticate(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/')->with('Success', 'Berhasil Masuk!');
        }

        return back()->with('error', 'Login failed');
    }

    public function daftar(){
        return Inertia::render('Autentikasi');
    }

    public function store(Request $request){
        // echo $request->all();
        $request->validate([
            'email' => 'required|email|unique:users',
            'username' => 'required|unique:users',
            'fullname' => 'required',
            'password' => ['required', 'min:8'],
        ]);
        
        do{
            $validUserId = uuid_create();
            $userIdData = CekUuid::cekUserUuid($validUserId);
        }while($userIdData != null);

        
        User::create([
            'user_id'=>$validUserId,
            'username' => $request->username,
            'fullname' => $request->fullname,
            'password' => bcrypt($request->password),
            'email' => $request->email,
            'user_role' => 'customer',
        ]);
    
        UserId::create(
            ['user_id' => $validUserId,]
        );
        return redirect()->intended('masuk')->with('success', 'Registrasi berhasil');
    }
}
