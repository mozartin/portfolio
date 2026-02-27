<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactNotification;
use App\Mail\ContactAutoReply;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // Send notification to site owner
        try {
            Mail::to('elenabeliavska2@gmail.com')
                ->send(new ContactNotification($validated));
        } catch (\Exception $e) {
            \Log::error('Contact form email failed: ' . $e->getMessage());
        }

        // Send auto-reply to the person who submitted the form
        try {
            Mail::to($validated['email'])
                ->send(new ContactAutoReply($validated));
        } catch (\Exception $e) {
            \Log::error('Contact auto-reply failed: ' . $e->getMessage());
        }

        return back()->with('success', true);
    }
}


