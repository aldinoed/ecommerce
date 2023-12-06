<?php

namespace App\Http\Controllers;

use App\Models\ProductBrand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illminate\Support\Facades\Storage;
use App\Models\CekUuid;
use App\Models\User;
use App\Models\Category;

class AdminController extends Controller
{
    //
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
    public function storeBrand(Request $request){
        dd($request->all());
        // return $request->file('image')->store('brand-images');
        $validatedData = $request->validate([
            'brand_name' => 'required',
            'brand_image' => 'image|file|max:2048',
        ]);
        if ($request->hasFile('image')) {
            // do{
                
                $validBrandId = uuid_create();
            //     $userIdData = CekUuid::cekUserUuid($validUserId);
            // }while($userIdData != null);
            $path = $request->file('image')->store('brand-images');
            ProductBrand::create([
                'brand_id'=>$validBrandId,
                'brand_name' => $request->brand_name,
                'brand_image' => $path,
            ]);

            return response()->json(['message' => 'Brand created successfully']);
        }
        return response()->json(['error' => 'Image not found in the request'], 400);

        // $brands.
    }
    public function transactionMan(){
        return view("");
    }
}
