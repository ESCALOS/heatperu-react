<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommodityController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FamilyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/productos', [CommodityController::class, 'index'])->name('commodity.index');

Route::inertia('/nosotros', 'About')->name('about');
Route::inertia('/servicios', 'Services')->name('services');
Route::get('/proyectos', [ProjectController::class, 'index'])->name('projects');
Route::inertia('/contactenos', 'Contact')->name('contact');

Route::post('/contactenos', ContactController::class)->name('contact.mail');

Route::get('/{family}', [FamilyController::class, 'show'])->name('family.show');
Route::get('/{family}/{category}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/{family}/{category}/{commodity}', [CommodityController::class, 'show'])->name('commodity.show');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
