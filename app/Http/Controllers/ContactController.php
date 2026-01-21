<?php

namespace App\Http\Controllers;

use App\Mail\ContactAutoReply;
use App\Mail\ContactNotification;
use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['nullable', 'string'],
        ]);

        $submission = ContactSubmission::create($validated);

        Mail::to(config('contact.recipient'))->send(new ContactNotification($submission));
        Mail::to($submission->email)->send(new ContactAutoReply($submission));

        return response()->json([
            'message' => 'Thank you! Your message has been received.',
        ], 201);
    }
}

