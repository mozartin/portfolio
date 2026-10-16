<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/svg+xml" href="/images/logo-cosmic.svg">
        <link rel="apple-touch-icon" href="/images/logo-cosmic-mark.png">

        {{-- Server-rendered for crawlers; Inertia Head updates on client navigations --}}
        @include('partials.seo')

        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased overflow-x-hidden">
        @inertia
    </body>
</html>
