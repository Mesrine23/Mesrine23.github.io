/**
 * One shape, two languages. Both content.en.ts and content.el.ts must satisfy
 * `Content`, so a field added to one is a type error until the other has it —
 * the bilingual page cannot silently drift.
 *
 * Anything still unknown is written as a [BRACKETED] placeholder rather than a
 * plausible guess. Search the content files for "[" to find what is outstanding.
 */

export interface NavLabels {
  about: string;
  work: string;
  openSource: string;
  side: string;
  experience: string;
  contact: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  note: string;
}

/** A shipped app. `client` is the brand it was built for; `role` the part played. */
export interface App {
  client: string;
  name: string;
  role: string;
}

export interface SideProject {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export interface Study {
  school: string;
  degree: string;
  period: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface Content {
  meta: {
    /** BCP-47 tag for <html lang>. */
    lang: string;
    title: string;
    description: string;
  };
  nav: NavLabels;
  hero: {
    name: string;
    tagline: string;
    /** null hides the Download CV button rather than linking to a 404. */
    cvUrl: string | null;
    cvLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    emailLabel: string;
    photoAlt: string;
  };
  facts: Fact[];
  about: {
    label: string;
    paragraphs: string[];
  };
  work: {
    label: string;
    apps: App[];
  };
  /** Rendered only when `items` is non-empty, so the section stays hidden
      until there is something released to show. */
  side: {
    label: string;
    intro: string;
    items: SideProject[];
  };
  openSource: {
    label: string;
    name: string;
    meta: string;
    blurb: string;
    products: Product[];
    repoUrl: string;
    codeCaption: string;
    /** Rendered verbatim inside the code panel. */
    code: string;
  };
  experience: {
    label: string;
    roles: Role[];
  };
  education: {
    label: string;
    items: Study[];
    languagesLabel: string;
    languages: string[];
  };
  /** The old Contact section folded into here: the hero already carries every
      contact action, so a whole section repeating them earned nothing. */
  footer: {
    /** Shown under the name, e.g. "iOS Software Engineer · Athens, Greece". */
    role: string;
    emailLabel: string;
    /** Source of truth only — never rendered raw. EmailLink base64-encodes it
        so the address does not sit in the HTML for harvesters to regex out. */
    email: string;
    links: ContactLink[];
    updated: string;
  };
}
