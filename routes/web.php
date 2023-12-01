<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TimController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\TicketController;
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

Route::get('/', function () {
    return Inertia::render('Homepage');
});
Route::get('welcome', function () {
    return Inertia::render('/', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function() {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/match',  [TestController:: class, 'index'])->name('match');

Route::post('/upmatch', [TestController:: class, 'store']);
Route::get('/upmatch', [TestController:: class, 'show']);

Route::post('/uptim', [TimController:: class, 'store']);
Route::get('/uptim', [TimController:: class, 'show']);

Route::post('/upplayer', [PlayerController:: class, 'store']);
Route::get('/upplayer', [PlayerController:: class, 'show']);

Route::get('/logout', function () {
    return Inertia::render('Homepage');
});
Route::get('/team', [TimController:: class, 'index'])->name('team');
Route::get('/select', [TimController:: class, 'select'])->name('select');

Route::get('/ticket', function () {
    return Inertia::render('Ticket');
});
Route::get('/seat', [TicketController:: class, 'index'])->name('seat');
Route::post('/seat/book', [TicketController :: class, 'update']);
Route::post('/seat/del', [TicketController :: class, 'delete']);
Route::get('/tiketsaya', [TicketController:: class, 'tiket'])->name('tiket');
Route::get('/detil', [TicketController:: class, 'detil'])->name('detil');
Route::get('listticket', [TicketController:: class, 'list'])->name('list');


Route::get('/test', [TestController:: class, 'index']);
Route::get('/test2', function () {
    return Inertia::render('test2');
});
Route::get('/admin', function () {
    return Inertia::render('Admin');
});
require __DIR__.'/auth.php';
