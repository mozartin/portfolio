<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/showcase', function () {
    return Inertia::render('Showcase');
})->name('showcase');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
