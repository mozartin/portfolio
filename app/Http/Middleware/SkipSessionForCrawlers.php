<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Social crawlers (Telegram especially) often fail to build link previews
 * when the HTML response sets session cookies. Use an in-memory session and
 * strip Set-Cookie headers for known bot user agents.
 */
class SkipSessionForCrawlers
{
    private const CRAWLER_PATTERN = '/(?:TelegramBot|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|Discordbot|SkypeUriPreview|Googlebot|bingbot|Baiduspider|DuckDuckBot|Applebot|Embedly|Quora\s+Link\s+Preview|Showyoubot|outbrain|pinterest|redditbot|vkShare|W3C_Validator)/i';

    public function handle(Request $request, Closure $next): Response
    {
        $isCrawler = $this->isCrawler($request);

        if ($isCrawler) {
            config(['session.driver' => 'array']);
        }

        /** @var Response $response */
        $response = $next($request);

        if ($isCrawler) {
            $response->headers->remove('Set-Cookie');
        }

        return $response;
    }

    private function isCrawler(Request $request): bool
    {
        $ua = (string) $request->userAgent();

        return $ua !== '' && preg_match(self::CRAWLER_PATTERN, $ua) === 1;
    }
}
