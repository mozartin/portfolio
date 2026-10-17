@php
    $seo = \App\Support\Seo::forCurrentRequest();
@endphp

<title inertia>{{ $seo['title'] }}</title>
<meta head-key="description" name="description" content="{{ $seo['description'] }}">
<link head-key="canonical" rel="canonical" href="{{ $seo['url'] }}">

<meta head-key="og:locale" property="og:locale" content="en_US">
<meta head-key="og:type" property="og:type" content="website">
<meta head-key="og:site_name" property="og:site_name" content="{{ $seo['siteName'] }}">
<meta head-key="og:title" property="og:title" content="{{ $seo['title'] }}">
<meta head-key="og:description" property="og:description" content="{{ $seo['description'] }}">
<meta head-key="og:url" property="og:url" content="{{ $seo['url'] }}">
<meta head-key="og:image" property="og:image" content="{{ $seo['image'] }}">
<meta head-key="og:image:secure_url" property="og:image:secure_url" content="{{ $seo['image'] }}">
<meta head-key="og:image:type" property="og:image:type" content="{{ $seo['imageType'] }}">
<meta head-key="og:image:width" property="og:image:width" content="{{ $seo['imageWidth'] }}">
<meta head-key="og:image:height" property="og:image:height" content="{{ $seo['imageHeight'] }}">
<meta head-key="og:image:alt" property="og:image:alt" content="{{ $seo['title'] }}">

<meta head-key="twitter:card" name="twitter:card" content="{{ $seo['twitterCard'] }}">
<meta head-key="twitter:title" name="twitter:title" content="{{ $seo['title'] }}">
<meta head-key="twitter:description" name="twitter:description" content="{{ $seo['description'] }}">
<meta head-key="twitter:image" name="twitter:image" content="{{ $seo['image'] }}">
<meta head-key="twitter:image:alt" name="twitter:image:alt" content="{{ $seo['title'] }}">

<meta head-key="theme-color" name="theme-color" content="#1a122e">
<link head-key="sitemap" rel="sitemap" type="application/xml" title="Sitemap" href="{{ rtrim(config('app.url'), '/') }}/sitemap.xml">
