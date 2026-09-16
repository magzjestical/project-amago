<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('/about', 'about')->name('about');
    Route::inertia('/announcement', 'announcement')->name('announcement');
    Route::inertia('/contactus', 'contactus')->name('contactus');
    Route::inertia('/faq', 'faq')->name('faq');
});

require __DIR__.'/settings.php';