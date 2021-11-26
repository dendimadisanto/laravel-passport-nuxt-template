<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WargaController;

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

Route::get('/', function () {
    return view('welcome');
});
/*Route::get('warga', WargaController::class, 'index');
//Route::get('warga','WargaController@index');
Route::post('warga','WargaController@create');
Route::put('/warga/{WARGA_ID}','WargaController@update');
Route::delete('/warga/{WARGA_ID}','WargaController@delete')*/