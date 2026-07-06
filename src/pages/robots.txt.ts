// https://docs.astro.build/en/guides/integrations-guide/sitemap/#sitemap-link-in-robotstxt

import type {APIRoute} from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /
    
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({site}) => {
    const base = import.meta.env.BASE_URL || '';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const sitemapURL = new URL(cleanBase + '/sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL));
};