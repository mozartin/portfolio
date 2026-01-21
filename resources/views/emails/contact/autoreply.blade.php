<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thanks for reaching out</title>
</head>
<body style="font-family: sans-serif; line-height: 1.5;">
    <p>Hi {{ $submission->name }},</p>
    <p>Thank you for taking a moment to write in. I received your message and will respond personally as soon as possible.</p>
    @if($submission->message)
        <p><strong>Your note:</strong></p>
        <p>{{ $submission->message }}</p>
    @endif
    <p style="margin-top: 1.5rem;">
        Best,<br>
        Beliavska
    </p>
</body>
</html>

