<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RobotsController;
use App\Http\Controllers\SitemapController;

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
Route::get('/robots.txt', RobotsController::class)->name('robots');

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

Route::get('/showcase/freelancehub', function () {
    return Inertia::render('ShowcaseFreelanceHub');
})->name('showcase.freelancehub');

Route::get('/showcase/poprock-avenue', function () {
    return Inertia::render('ShowcasePoprock');
})->name('showcase.poprock');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
