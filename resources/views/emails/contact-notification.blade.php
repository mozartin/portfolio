<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Georgia, serif; color: #372C43; line-height: 1.6; }
        .container { max-width: 560px; margin: 0 auto; padding: 32px; }
        .header { font-size: 20px; font-weight: bold; margin-bottom: 24px; color: #8A6FA9; }
        .field { margin-bottom: 16px; }
        .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #AD9AC2; margin-bottom: 4px; }
        .value { font-size: 15px; }
        .message-box { background: #F3F0F6; padding: 16px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; }
        .footer { margin-top: 32px; font-size: 12px; color: #AD9AC2; font-style: italic; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">New message from your website</div>

        <div class="field">
            <div class="label">Name</div>
            <div class="value">{{ $name }}</div>
        </div>

        <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{{ $email }}">{{ $email }}</a></div>
        </div>

        <div class="field">
            <div class="label">Message</div>
            <div class="message-box">{{ $contactMessage }}</div>
        </div>

        <div class="footer">
            Sent from beliavska.com contact form
        </div>
    </div>
</body>
</html>

