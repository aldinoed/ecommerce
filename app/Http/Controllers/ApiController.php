<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\User;
// use App\Models\ProductBrand;
use App\Models\ProductBrand;
use App\Models\CekUuid;
use App\Models\Product;
use App\Models\ProductMedia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Cart;

class ApiController extends Controller
{
    public function carts($userId){
        $carts = Cart::where('user_id', $userId)->get();
        if($carts){
             return response()->json(['carts' => $carts]);
        }else{
            return response()->json(['message' => 'Data keranjang tidak ditemukan']);
        }
    }
    public function specificProduct($productId){
        $product = Product::where('product_id', $productId)->join('product_brands', 'products.brand_id', '=', 'product_brands.brand_id')->first();
        $productMedia = ProductMedia::where('product_id', $productId)->first();
        
        if(!$product || !$productMedia) {
            return response()->json(['message' => 'Product not found'], 404);
        }  
        
        $result = ['media'=>$productMedia, 'product' => $product];
        return response()->json($result, 200);
    }
    public function categories(){
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }
    public function products(){
        $products = Product::all();
        return response()->json(['products'=> $products]);
    }
    public function brands(){
        $brands = ProductBrand::all();
        return response()->json(['brands' => $brands]);
    }
    public function users(){
        $users = User::all();
        return response()->json(['users' => $users]);
    }
    public function specificUser($email){
        $user = User::where('email', $email)->first();
        return response()->json(['user' => $user]);
    }
    public function destroyPro($proId){
        $image = ProductMedia::where('product_id', $proId);
        $product = Product::where('product_id',$proId);

        if(!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }
        if($image){
            $image->delete();
       }
        $product->delete();
        return response()->json(['message' => 'Successfully delete category'], 200);
        // return response()->json(['message' => 'User not found'], 404);
    }
    public function destroyCat($catId){
        $category = Category::where('category_id',$catId);

        if(!$category){
            return response()->json(['message' => 'Category not found'], 404);
        }
        $category->delete();
        return response()->json(['message' => 'Successfully delete category'], 200);
        // return response()->json(['message' => 'User not found'], 404);
    }
    public function destroyUser($userId){
        $user = User::where('user_id',$userId);

        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'Successfully delete user'], 200);
    }

    public function storeBrand(Request $request){
        try{
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            // $request->validate([
            //     'nama' => 'required',
            //     'image' => 'required',
            // ]);
            
            $validBrandId = uuid_create();
            ProductBrand::create([
                'brand_id'=>$validBrandId,
                'brand_name' => $request->name,
                'brand_image' => $imageName,
            ]);
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            return response()->json(['message' => 'Brand created successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => 'Something went wrong'], 500);
        }
        
        // return response()->json(['error' => 'Image not found in the request'], 400);
    }

    // public function getStock()
    public function storeProduk(Request $request){
        try{
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            // $request->validate([
            //     'name' => 'required',
            //     'image' => 'required',
            // ]);

            // do{
            //     $validUserId = uuid_create();
            //     $userIdData = CekUuid::cekUserUuid($validUserId);
            // }while($userIdData != null);
            
            $validMediaId = uuid_create();
            $validProductId = uuid_create();
            Product::create([
                'product_id'=>$validProductId,
                'product_name' => $request->name,
                'description' => $request->desc,
                'category_id' => $request->cat,
                'brand_id' => $request->brand,
                'product_price' => $request->price,
                'product_stock' => $request->amount,
                'product_weight' => $request->weight,
                'sold_amount' => 0,
            ]);
            ProductMedia::create([
                'media_id' => $validMediaId,
                'media_file' => $imageName,
                'product_id' => $validProductId,
                'media_sequence' => 1,
            ]);
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            return response()->json(['message' => 'Product created successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => 'Something went wrong'.$e->getMessage()], 500);
        }
    }
    public function putProduk(Request $request){
        try{
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            // $request->validate([
            //     'name' => 'required',
            //     'image' => 'required',
            // ]);

            // do{
            //     $validUserId = uuid_create();
            //     $userIdData = CekUuid::cekUserUuid($validUserId);
            // }while($userIdData != null);
            
            $validMediaId = uuid_create();
            $validProductId = uuid_create();
            Product::create([
                'product_id'=>$validProductId,
                'product_name' => $request->name,
                'description' => $request->desc,
                'category_id' => $request->cat,
                'brand_id' => $request->brand,
                'product_price' => $request->price,
                'product_stock' => $request->amount,
                'sold_amount' => 0,
            ]);
            ProductMedia::create([
                'media_id' => $validMediaId,
                'media_file' => $imageName,
                'product_id' => $validProductId,
                'media_sequence' => 1,
            ]);
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            return response()->json(['message' => 'Product created successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => 'Something went wrong'.$e->getMessage()], 500);
        }
    }
}
