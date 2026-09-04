import type { Content } from './types';
import { en } from './content.en';
import { el } from './content.el';

export type Locale = 'en' | 'el';

export const content: Record<Locale, Content> = { en, el };

/** Href for a locale's home page. English is the default locale and lives at the root. */
export const homeFor = (locale: Locale): string => (locale === 'en' ? '/' : `/${locale}/`);

export const locales: Locale[] = ['en', 'el'];
