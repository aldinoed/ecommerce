<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserDashboardController;
use Illuminate\Session\Middleware\AuthenticateSession;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/dashboard', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/admin/produk', function () {return Inertia::render('AdminHome');});
Route::get('/admin/produk/{productId}/edit', [AdminController::class, 'updatePage']);
Route::post('/api/update-produk', [ApiController::class, 'updateProduct']);
Route::get('/admin/brand', [AdminController::class,'indexBrand']);
Route::get('/admin/input-produk', [AdminController::class,'produkMan']);
Route::get('/api/products-data', [ApiController::class,'products']);
Route::post('/api/input-produk', [ApiController::class,'storeProduk']);
Route::get('/admin/input-brand', [AdminController::class,'brandMan']);
Route::post('/api/input-brand', [ApiController::class,'storeBrand']);
Route::get('/api/categories-data', [ApiController::class,'categories']);
Route::get('/api/brands-data', [ApiController::class,'brands']);
Route::get('/api/brands-data/{proId}', [ApiController::class,'specificBrand']);
Route::get('/admin/categories', [AdminController::class,'indexCat']);
Route::get('/admin/input-cat', [AdminController::class,'catMan']);
Route::post('/admin/input-cat', [AdminController::class,'storeCat']);
Route::get('/admin/user', function () {return Inertia::render('AdminHome');});
Route::delete('/api/delete-product/{proId}', [ApiController::class,'destroyPro']);
Route::delete('/api/delete-category/{catId}', [ApiController::class,'destroyCat']);
Route::get('/api/carts-data/{userId}', [ApiController::class,'carts']);
Route::get('/api/users-data', [ApiController::class,'users']);
Route::get('/api/products-data/{productId}', [ApiController::class, 'specificProduct']);
Route::get('/api/user-data/{email}', [ApiController::class,'specificUser']);
Route::delete('/api/delete-user/{userId}', [ApiController::class,'destroyUser']);
Route::delete('/api/delete-brand/{brandId}', [ApiController::class,'destroyBrand']);

Route::get('/user/dashboard', [UserDashboardController::class, 'indexUserProfile'])->middleware('auth');
Route::get('/user/transaksi', [UserDashboardController::class, 'indexUserProfile'])->middleware('auth');
Route::get('/user/dashboard/alamat', [UserDashboardController::class, 'indexUserAddress'])->middleware('auth');
// Route::get('/dashboard', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// });
// Route::get('/masuk', [AuthController::class, 'login']);
// Route::post('/masuk', [AuthenticatedSessionController::class,'store']);
Route::get('/', function (){
    if(auth()->check()){
        $user = auth()->user();
    }else{
        $user = null;
    }
    $user = session('user');
    return Inertia::render('Home', [
        'daftar' => Route::has('daftar'), 
        'masuk' => Route::has('masuk'),
        'user' => $user
    ]);
});
Route::get('/sanctum/csrf-token', function(){
    return response()->json(['token' => csrf_token()]);
});

Route::get('/user/{userFullname}', [HomeController::class, 'user']);
Route::get('/search/{params}', [HomeController::class, 'home']);
Route::get('/product/{productId}', [HomeController::class, 'specificProduct']);
Route::get('/keranjang', function () {
    return Inertia::render('Keranjang' );
})->middleware('auth');
// Route::get('/admin/dashboard', function () {
//         return Inertia::render('AdminHome');
//     });
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['web', 'auth'])->group(function () {
//     Route::get('/keranjang', function () {
//         return Inertia::render('Keranjang');
//     });
//     // ... other routes
// });

Route::get('/admin/dashboard', function () {
   
    return Inertia::render('AdminHome');
   
})->middleware(['auth'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
