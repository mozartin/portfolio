<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Теперь мы открываем Home.jsx из папки resources/js/Pages/
        return Inertia::render('Home');
    }
}
