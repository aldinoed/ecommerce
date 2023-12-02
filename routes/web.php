<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;

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
Route::get('/admin/input-produk', function () {return Inertia::render('InputBarang');});
Route::get('/admin/user', function () {return Inertia::render('AdminHome');});
// Route::get('/admin/produk', [AdminController::class,'produkMan']);

// Route::get('/admin/input', [AdminController::class,'produkMan']);

Route::get('/masuk', function(){
    return Inertia::render('Autentikasi', ['canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', [HomeController::class, 'home']);
Route::get('/search', [HomeController::class, 'home']);
Route::get('/keranjang', function () {
    return Inertia::render('Keranjang' );
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
