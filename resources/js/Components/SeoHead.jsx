import { Head, usePage } from '@inertiajs/react';

const DEFAULT_DESCRIPTION =
    'Web developer Olena Beliavska — designing and building modern, memorable websites. Design · Code · Experience.';

const DEFAULT_IMAGE = '/images/og-default.png';

/**
 * Site-wide Open Graph, Twitter Card, and document meta.
 * Absolute URLs are required for social crawlers.
 */
export default function SeoHead({
    title,
    description = DEFAULT_DESCRIPTION,
    path,
    image = DEFAULT_IMAGE,
    type = 'website',
    noIndex = false,
}) {
    const { seo, url: pageUrl } = usePage().props;
    const siteName = seo?.siteName ?? 'Olena Beliavska';
    const baseUrl = (seo?.baseUrl ?? '').replace(/\/$/, '');
    const canonicalPath = path ?? pageUrl ?? '/';
    const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const url = seo?.url ?? `${baseUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
    const imageUrl = image.startsWith('http')
        ? image
        : (seo?.image && image === DEFAULT_IMAGE ? seo.image : `${baseUrl}${image}`);
    const fullTitle = title?.includes(siteName) ? title : `${title} · ${siteName}`;

    return (
        <Head title={title}>
            <meta head-key="description" name="description" content={description} />
            {noIndex && <meta head-key="robots" name="robots" content="noindex,nofollow" />}

            <link head-key="canonical" rel="canonical" href={url} />

            {/* Open Graph */}
            <meta head-key="og:locale" property="og:locale" content="en_US" />
            <meta head-key="og:type" property="og:type" content={type} />
            <meta head-key="og:site_name" property="og:site_name" content={siteName} />
            <meta head-key="og:title" property="og:title" content={fullTitle} />
            <meta head-key="og:description" property="og:description" content={description} />
            <meta head-key="og:url" property="og:url" content={url} />
            <meta head-key="og:image" property="og:image" content={imageUrl} />
            <meta head-key="og:image:secure_url" property="og:image:secure_url" content={imageUrl} />
            <meta head-key="og:image:type" property="og:image:type" content="image/png" />
            <meta head-key="og:image:width" property="og:image:width" content="1200" />
            <meta head-key="og:image:height" property="og:image:height" content="630" />
            <meta head-key="og:image:alt" property="og:image:alt" content={fullTitle} />

            {/* Twitter / X */}
            <meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta head-key="twitter:title" name="twitter:title" content={fullTitle} />
            <meta head-key="twitter:description" name="twitter:description" content={description} />
            <meta head-key="twitter:image" name="twitter:image" content={imageUrl} />
            <meta head-key="twitter:image:alt" name="twitter:image:alt" content={fullTitle} />

            <meta head-key="theme-color" name="theme-color" content="#1a122e" />
        </Head>
    );
}
