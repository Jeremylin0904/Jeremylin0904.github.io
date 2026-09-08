import { languages, type Lang } from '../data/site';

export function getLangPaths() {
	return languages.map((lang) => ({ params: { lang } }));
}

export function isLang(value: string | undefined): value is Lang {
	return languages.includes(value as Lang);
}

export function localizedPath(lang: Lang, path = '') {
	const suffix = path ? `/${path.replace(/^\/|\/$/g, '')}` : '';
	return `/${lang}${suffix}/`;
}

export function alternatePath(lang: Lang, pathname: string) {
	const target = lang === 'en' ? 'zh' : 'en';
	const segments = pathname.split('/').filter(Boolean);

	if (segments.length && isLang(segments[0])) {
		segments[0] = target;
	} else {
		segments.unshift(target);
	}

	return `/${segments.join('/')}/`;
}

export function absoluteUrl(path: string) {
	return new URL(path, 'https://jeremylin0904.github.io').toString();
}
