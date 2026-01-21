<?php

return [
    'recipient' => env('CONTACT_RECIPIENT_EMAIL', env('MAIL_FROM_ADDRESS', 'hello@example.com')),
    'notification_subject' => env('CONTACT_NOTIFICATION_SUBJECT', 'New contact request received'),
    'auto_reply_subject' => env('CONTACT_AUTO_REPLY_SUBJECT', 'Thanks for reaching out'),
];

