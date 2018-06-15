<?php

use Illuminate\Http\Request;

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

// Contact
Route::group(['middleware' => 'cors'], function() {

    Route::get('contacts', 'ContactsController@index');

    Route::get('contacts/{contact}', 'ContactsController@show');

    Route::post('contacts','ContactsController@store');

    Route::put('contacts/{contact}','ContactsController@update');

    Route::delete('contacts/{contact}', 'ContactsController@delete');
});

// message
Route::group(['middleware' => 'cors'], function() {

    Route::get('messages/{message}', 'MessagesController@show');

    Route::get('messages/contact/{contact}', 'MessagesController@showByContact');

    Route::post('messages','MessagesController@store');

    Route::delete('messages/{message}', 'MessagesController@delete');

    Route::put('messages/{message}', 'MessagesController@update');
});
