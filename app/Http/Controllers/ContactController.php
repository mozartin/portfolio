<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        $apiKey = config('mail.mailers.smtp.password');
        $fromName = config('mail.from.name', 'Olena Beliavska');
        $fromAddress = config('mail.from.address', 'hello@beliavska.com');
        $from = $fromName . ' <' . $fromAddress . '>';

        Log::info('Contact form: from=' . $from . ', apiKey=' . ($apiKey ? 'SET(' . substr($apiKey, 0, 8) . '...)' : 'NOT SET'));

        // Send notification to site owner
        try {
            $notificationHtml = View::make('emails.contact-notification', [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'contactMessage' => $validated['message'],
            ])->render();

            $response = Http::withToken($apiKey)->timeout(10)->post('https://api.resend.com/emails', [
                'from' => $from,
                'to' => ['elenabeliavska2@gmail.com'],
                'subject' => 'New Contact Form Submission — ' . $validated['name'],
                'html' => $notificationHtml,
            ]);
            Log::info('Resend notification response: ' . $response->status() . ' ' . $response->body());
        } catch (\Exception $e) {
            Log::error('Contact form email failed: ' . $e->getMessage());
        }

        // Send auto-reply to the person who submitted the form
        try {
            $autoReplyHtml = View::make('emails.contact-auto-reply', [
                'name' => $validated['name'],
            ])->render();

            $response = Http::withToken($apiKey)->timeout(10)->post('https://api.resend.com/emails', [
                'from' => $from,
                'to' => [$validated['email']],
                'subject' => 'Thank you for reaching out — Olena Beliavska',
                'html' => $autoReplyHtml,
            ]);
            Log::info('Resend auto-reply response: ' . $response->status() . ' ' . $response->body());
        } catch (\Exception $e) {
            Log::error('Contact auto-reply failed: ' . $e->getMessage());
        }

        return back()->with('success', true);
    }
}
