import type { Content } from './types';

/**
 * ENGLISH CONTENT — edit this file to change the site. No markup here, just facts.
 * Everything below comes from the CV. Placeholders in [BRACKETS] are still needed.
 *
 * Deliberately NOT published (they are on the CV but do not belong on a public page):
 * phone number, date of birth, nationality, gender, place of birth.
 */
export const en: Content = {
  meta: {
    lang: 'en',
    title: 'Panagiotis Palamidas — iOS Software Engineer',
    description:
      'iOS Software Engineer in Athens, working on the Eurobank mobile banking app. Previously tech lead on shipped apps for Zenith, Athenian Brewery, Sport24 and DEI.',
  },

  nav: {
    about: 'about',
    work: 'work',
    openSource: 'open-source',
    side: 'side-projects',
    experience: 'experience',
    contact: 'contact',
  },

  hero: {
    name: 'Panagiotis Palamidas',
    tagline:
      'iOS engineer in Athens. I lead mobile builds from first commit to App Store — and write the foundations they stand on.',
    cvUrl: '/cv/palamidas-cv.pdf',
    cvLabel: 'DOWNLOAD CV',
    githubLabel: 'GITHUB',
    linkedinLabel: 'LINKEDIN',
    emailLabel: 'EMAIL',
    photoAlt: 'Panagiotis Palamidas',
  },

  facts: [
    { label: 'LOCATION', value: 'Athens, GR' },
    { label: 'CURRENTLY', value: 'Silvare · Eurobank' },
    { label: 'STACK', value: 'SwiftUI · UIKit' },
    { label: 'SHIPPING SINCE', value: '2022' },
  ],

  about: {
    label: 'ABOUT',
    paragraphs: [
      "I write iOS apps the way I’d want to inherit them: simple, well-defined components, clear boundaries, and no framework you can’t walk away from. Most of my time goes into building architecture that can evolve with a product rather than become a constraint as it grows.",
      'Over four years I have taken apps from first concept to App Store release for Zenith, Athenian Brewery, Olympic Brewery, 24 Media, DEI and DEPA — often as tech or mobile lead, designing the architecture and mentoring the developers building on it.',
      'Currently at Silvare, working on the Eurobank project.',
    ],
  },

  work: {
    label: 'SELECTED WORK',
    apps: [
      { client: 'Eurobank',         name: 'Eurobank Mobile App', role: 'iOS Software Engineer' },
      { client: 'Zenith',           name: 'myZenith',      role: 'Tech Lead · iOS' },
      { client: 'Athenian Brewery', name: 'My eBeer',      role: 'Mobile Lead · iOS' },
      { client: 'Olympic Brewery',  name: 'DraughtClub',   role: 'Mobile Lead · iOS' },
      { client: '24 Media',         name: 'Sport24',       role: 'Mobile Lead · iOS' },
      { client: 'Aegean Motorway',  name: 'MyEway',        role: 'iOS Developer' },
      { client: 'DEI',              name: 'myDEI',         role: 'iOS Developer' },
      { client: 'DEPA',             name: 'myFisikon net', role: 'iOS Developer' },
      { client: 'Foodakai',         name: 'Foodakai',      role: 'iOS Developer' },
    ],
  },

  // Empty on purpose: the repos are private and nothing is released yet, so the
  // whole section stays hidden. Add entries here after the first release.
  side: {
    label: 'SIDE PROJECTS',
    intro: 'Built for myself, end to end.',
    items: [],
  },

  openSource: {
    label: 'OPEN SOURCE',
    name: 'pal-mvvm-foundation',
    meta: 'MIT · Swift 6 · iOS 17+',
    blurb:
      'A zero-dependency Swift Package for building MVVM + Coordinator apps — with networking, navigation, persistence, and design system components kept as separate products, so you can use only what you need.',
    products: [
      { name: 'Networking',    note: 'Typed requests, no third-party client.' },
      { name: 'Navigation',    note: 'Coordinator-driven routing.' },
      { name: 'Persistence',   note: 'Storage behind a narrow protocol.' },
      { name: 'Design System', note: 'Tokens and shared components.' },
    ],
    repoUrl: 'https://github.com/Mesrine23/pal-mvvm-foundation',
    codeCaption: 'Package.swift',
    code: `dependencies: [
  .package(
    url: "https://github.com/Mesrine23/pal-mvvm-foundation",
    branch: "main"
  )
]`,
  },

  experience: {
    label: 'EXPERIENCE',
    roles: [
      {
        company: 'Silvare',
        title: 'iOS Software Engineer',
        period: '02/2026 — Present',
        location: 'Athens, GR',
        summary:
          "Feature development and maintenance on the Eurobank mobile banking app, one of Greece's largest consumer banking products. Primarily SwiftUI, interoperating with the app's substantial existing UIKit layers in a large multi-team codebase.",
        bullets: [],
      },
      {
        company: 'Threenitas',
        title: 'iOS Software Engineer',
        period: '07/2022 — 01/2026',
        location: 'Athens, GR',
        summary:
          'Delivered iOS applications for enterprise clients across energy, FMCG, media and transport — tech or mobile lead on several.',
        bullets: [
          'Set architecture and mentored junior developers.',
          'Owned apps from concept through App Store release and ongoing maintenance.',
        ],
      },
      {
        company: 'Freedom SA Insurance Network',
        title: 'Software Engineer',
        period: '02/2022 — 06/2022',
        location: 'Athens, GR',
        bullets: [
          'Maintained and upgraded SQL databases for data accuracy, performance and reliability.',
          'Built Python scripts and web scrapers for data collection, automation and integration into existing systems.',
        ],
      },
    ],
  },

  education: {
    label: 'EDUCATION',
    items: [
      {
        school: 'National and Kapodistrian University of Athens',
        degree: 'BSc, Informatics and Telecommunications',
        period: '09/2018 — 07/2023',
      },
    ],
    languagesLabel: 'LANGUAGES',
    languages: ['Greek (Native)', 'English (Fluent)', 'French (Conversational)'],
  },

  footer: {
    role: 'iOS Software Engineer · Athens, Greece',
    emailLabel: 'Email',
    email: 'panagiotispalamidas@gmail.com',
    links: [
      { label: 'GitHub',   href: 'https://github.com/Mesrine23' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/panagiotis-palamidas/' },
    ],
    updated: 'Updated September 2026',
  },
};
