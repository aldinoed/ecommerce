<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::delete('/api/delete-user/{userId}', [ApiController::class,'destroyUser']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware('auth:sanctum')->get('/login', function (Request $request) {
//     return $request->user();
// });
// Route::middleware('auth:sanctum')->get('/signup', function (Request $request) {
//     return $request->user();
// });
// Route::middleware('auth:sanctum')->get('/dashboard', function (Request $request) {
//     return $request->user();
// });
