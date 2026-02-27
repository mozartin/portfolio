<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Georgia, serif; color: #372C43; line-height: 1.8; }
        .container { max-width: 560px; margin: 0 auto; padding: 32px; }
        .header { font-size: 20px; font-weight: bold; margin-bottom: 24px; color: #8A6FA9; }
        .body-text { font-size: 15px; margin-bottom: 16px; }
        .signature { margin-top: 32px; font-size: 14px; color: #8A6FA9; }
        .footer { margin-top: 32px; font-size: 12px; color: #AD9AC2; font-style: italic; border-top: 1px solid #F3F0F6; padding-top: 16px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Thank you for reaching out!</div>

        <p class="body-text">
            Hi {{ $name }},
        </p>

        <p class="body-text">
            I've received your message and appreciate you taking the time to get in touch.
            I'll review your inquiry and get back to you as soon as possible — usually within 1–2 business days.
        </p>

        <p class="body-text">
            In the meantime, feel free to explore my work at
            <a href="https://beliavska.com" style="color: #8A6FA9;">beliavska.com</a>.
        </p>

        <div class="signature">
            Best regards,<br>
            <strong>Olena Beliavska</strong>
        </div>

        <div class="footer">
            This is an automated reply from beliavska.com
        </div>
    </div>
</body>
</html>

