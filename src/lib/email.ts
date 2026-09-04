/**
 * The address is encoded at build time and assembled into a mailto: on load,
 * so the raw string never appears in the served HTML. That defeats the naive
 * harvesters that regex for `mailto:` and `x@y.z`; it is NOT protection
 * against anyone deliberately targeting the page.
 *
 * These are helpers rather than a component on purpose: a component that
 * renders the <a> itself carries its own Astro style scope, so classes passed
 * in from the parent silently do not apply. Each component renders its own
 * anchor and keeps its own scoped styles.
 */

/** Base64 for the `data-email` attribute; decoded by the loader in Base.astro. */
export const encodeEmail = (email: string): string =>
  Buffer.from(email, 'utf8').toString('base64');

/** Readable but not scrapable — the no-JS fallback. */
export const humanEmail = (email: string): string =>
  email.replace('@', ' [at] ').replace(/\.([^.]*)$/, ' [dot] $1');
