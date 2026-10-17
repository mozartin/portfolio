<?php

namespace App\Support;

use Illuminate\Support\Facades\Route;

class Seo
{
    public static function forCurrentRequest(): array
    {
        $defaults = config('seo.default', []);
        $routeName = Route::currentRouteName();
        // Array access — dotted route names must not go through config('a.b.c') nesting.
        $page = $routeName ? (config('seo.pages')[$routeName] ?? null) : null;

        $title = $page['title'] ?? $defaults['title'] ?? config('app.name');
        $description = $page['description'] ?? $defaults['description'] ?? '';
        $imagePath = $page['image'] ?? $defaults['image'] ?? '/images/og-default.png';

        $baseUrl = rtrim(config('app.url'), '/');
        $path = request()->getPathInfo() ?: '/';
        if ($path !== '/') {
            $path = rtrim($path, '/') ?: '/';
        }

        $imageUrl = str_starts_with($imagePath, 'http')
            ? $imagePath
            : $baseUrl.$imagePath;

        $version = config('seo.image_version');
        if ($version) {
            $imageUrl .= (str_contains($imageUrl, '?') ? '&' : '?').'v='.$version;
        }

        $isJpeg = str_ends_with(strtolower(parse_url($imagePath, PHP_URL_PATH) ?: $imagePath), '.jpg')
            || str_ends_with(strtolower(parse_url($imagePath, PHP_URL_PATH) ?: $imagePath), '.jpeg');

        return [
            'siteName' => config('seo.site_name', config('app.name')),
            'title' => $title,
            'description' => $description,
            'url' => $baseUrl.($path === '/' ? '/' : $path),
            'image' => $imageUrl,
            'imagePath' => $imagePath,
            'imageType' => $isJpeg ? 'image/jpeg' : 'image/png',
            'imageWidth' => (int) config('seo.image_width', 1200),
            'imageHeight' => (int) config('seo.image_height', 1200),
            'twitterCard' => config('seo.twitter_card', 'summary'),
        ];
    }

    /**
     * Public indexable URLs for sitemap.xml, driven by named routes in config/seo.php.
     *
     * @return list<array{loc: string, lastmod: string, changefreq: string, priority: string}>
     */
    public static function sitemapUrls(): array
    {
        $baseUrl = rtrim(config('app.url'), '/');
        $lastmod = now()->toDateString();
        $urls = [];

        foreach (config('seo.pages', []) as $routeName => $page) {
            if (! Route::has($routeName)) {
                continue;
            }

            $urls[] = [
                'loc' => $baseUrl.route($routeName, absolute: false),
                'lastmod' => $lastmod,
                'changefreq' => $page['changefreq'] ?? 'monthly',
                'priority' => $page['priority'] ?? '0.5',
            ];
        }

        return $urls;
    }
}
