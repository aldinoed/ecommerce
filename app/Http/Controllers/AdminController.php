<?php

namespace App\Http\Controllers;

use App\Models\ProductBrand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\CekUuid;
use App\Models\User;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function userMan(){
        return Inertia::render('InputBarang');
    }
    
    public function produkMan(){
        return Inertia::render('InputBarang');
    }
    public function indexBrand(){
        $brands = ProductBrand::all();
        return Inertia::render('AdminHome', ['brands' => $brands]);
        // return Inertia::render('AdminHome')->with(response()->json($brands));
    }
    public function brandMan(){
        return Inertia::render('InputBrand');
    }
    public function updatePage(){
        return Inertia::render('UpdatePage');
    }

    public function indexCat(){
        $categories = Category::all();
        return Inertia::render('AdminHome');
    }
    public function catMan(){
        
        return Inertia::render('InputCat');
    }
    public function storeCat(Request $request){
        $request->validate([
            'cat'=> ['required'],
        ]);

        $uuid = uuid_create();
        Category::create([
            'category_id' => $uuid,
            'category_name' =>  $request->cat,
        ]);
        return redirect()->intended('admin/input-cat')->with('success', 'Input Kategori berhasil');
    }
    

        // $brands.
    public function transactionMan(){
        return view("");
    }
}
