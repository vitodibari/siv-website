export const getCleanUrl = (path: string): string => {
    const base = import.meta.env.BASE_URL || '';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
};

export const resolveHref = (href: string): string => {
    if (href.startsWith("http://") || href.startsWith("https://")) {
        return href;
    }
    return getCleanUrl(href);
};
