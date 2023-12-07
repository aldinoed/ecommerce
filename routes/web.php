<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/admin', function () {return Inertia::render('AdminHome');});
Route::get('/admin/produk', function () {return Inertia::render('AdminHome');});
Route::get('/admin/brand', [AdminController::class,'indexBrand']);
Route::get('/admin/input-produk', [AdminController::class,'produkMan']);
Route::post('/api/input-produk', [ApiController::class,'storeProduk']);
Route::get('/admin/input-brand', [AdminController::class,'brandMan']);
Route::post('/api/input-brand', [ApiController::class,'storeBrand']);
Route::get('/api/categories-data', [ApiController::class,'categories']);
Route::get('/api/brands-data', [ApiController::class,'brands']);
Route::get('/admin/categories', [AdminController::class,'indexCat']);
Route::get('/admin/input-cat', [AdminController::class,'catMan']);
Route::post('/admin/input-cat', [AdminController::class,'storeCat']);
Route::get('/admin/user', function () {return Inertia::render('AdminHome');});
Route::delete('/api/delete-category/{catId}', [ApiController::class,'destroyCat']);
Route::get('/api/users-data', [ApiController::class,'users']);
Route::delete('/api/delete-user/{userId}', [ApiController::class,'destroyUser']);
// Route::get('/admin/produk', [AdminController::class,'produkMan']);

// Route::get('/admin/input', [AdminController::class,'produkMan']);

// Route::get('/masuk', function(){
//     return Inertia::render('Autentikasi');
    // , ['canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
// });
Route::get('/masuk', [AuthController::class, 'login'])->name('login');
Route::post('/masuk', [AuthController::class,'authenticate']);
Route::get('/daftar', [AuthController::class,'daftar']);
Route::post('/daftar', [AuthController::class,'store']);
Route::get('/sanctum/csrf-token', function(){
    return response()->json(['token' => csrf_token()]);
});
Route::get('/', [HomeController::class, 'home']);
Route::get('/search', [HomeController::class, 'home']);
Route::get('/keranjang', function () {
    return Inertia::render('Keranjang' );
})->middleware('auth');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/keranjang', function () {
        return Inertia::render('Keranjang');
    });
    // ... other routes
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
