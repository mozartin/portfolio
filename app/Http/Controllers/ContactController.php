<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactNotification;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // Send email notification
        try {
            Mail::to('olena.beliavska@icloud.com')
                ->send(new ContactNotification($validated));
        } catch (\Exception $e) {
            \Log::error('Contact form email failed: ' . $e->getMessage());
        }

        return back()->with('success', true);
    }
}

