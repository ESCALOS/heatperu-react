<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommodityController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FamilyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TutorialCategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/productos', [CommodityController::class, 'index'])->name('commodity.index');

Route::inertia('/nosotros', 'About')->name('about');
Route::inertia('/servicios', 'Services')->name('services');
Route::get('/proyectos', [ProjectController::class, 'index'])->name('projects');

// Tutoriales
Route::get('/tutoriales', [TutorialCategoryController::class, 'index'])->name('tutorials.index');
Route::get('/tutoriales/{catergory}', [TutorialCategoryController::class, 'tutorials_by_category'])->name('tutorial-list.index');

Route::inertia('/contactenos', 'Contact')->name('contact');

Route::post('/contactenos', ContactController::class)->name('contact.mail');

Route::get('/{family}', [FamilyController::class, 'show'])->name('family.show');
Route::get('/{family}/{category}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/{family}/{category}/{commodity}', [CommodityController::class, 'show'])->name('commodity.show');


require __DIR__.'/auth.php';
