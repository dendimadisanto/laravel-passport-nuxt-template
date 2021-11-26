<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WargaController;
use App\Http\Controllers\MasterController;
use App\Http\Controllers\PassportAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login'])->name('login');
  
Route::middleware('auth:api')->group(function () {

	Route::group(['middleware' => 'cors'], function () {
	Route::get('warga',[WargaController::class,'index']);
	Route::post('warga',[WargaController::class,'create']);
	Route::post('/warga/{WARGA_ID}',[WargaController::class,'update']);
	Route::delete('/warga/{WARGA_ID}',[WargaController::class,'delete']);


	Route::get('get-user', [PassportAuthController::class, 'userInfo']);
    Route::post('logout', [PassportAuthController::class, 'logout'])->name('logout');


	Route::group(['prefix' => 'master'], function(){
		Route::get('get-agama', [MasterController::class, 'getAgama']);
		Route::get('get-hubungan', [MasterController::class, 'getHubungan']);
	});
});
  
});


