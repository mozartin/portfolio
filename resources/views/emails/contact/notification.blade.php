<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New contact request</title>
</head>
<body style="font-family: sans-serif; line-height: 1.5;">
    <h1>New contact request</h1>
    <p><strong>Name:</strong> {{ $submission->name }}</p>
    <p><strong>Email:</strong> {{ $submission->email }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $submission->message ?? '—' }}</p>
    <p style="margin-top: 1rem; color: #6b7280;">
        Received {{ optional($submission->created_at)->format('F j, Y g:ia') ?? 'just now' }}.
    </p>
</body>
</html>

