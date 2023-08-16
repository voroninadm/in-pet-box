<?php

use App\Http\Controllers\BoxController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::middleware('guest')->get(('/'), function () {
    return Inertia::render('WelcomePage');
})->name('login');


// Auth routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Box routes
Route::middleware('auth')->group(function () {
    Route::get('/main', [BoxController::class, 'index'])->name('main');
    Route::get('/box/create', [BoxController::class, 'create'])->name('box.create');
    Route::post('/box/store', [BoxController::class, 'store'])->name('box.store');
    Route::get('/box/edit/{box}', [BoxController::class, 'edit'])->name('box.edit');
    Route::patch('/box/update/{box}', [BoxController::class, 'update'])->name('box.update');
    Route::delete('/box/destroy/{box}', [BoxController::class, 'destroy'])->name('box.destroy');
});

require __DIR__.'/auth.php';
