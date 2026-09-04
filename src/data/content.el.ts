import type { Content } from './types';

/**
 * GREEK CONTENT — my draft, for Panagiotis to correct. Same shape as content.en.ts.
 * Placeholders in [BRACKETS] are still needed.
 */
export const el: Content = {
  meta: {
    lang: 'el',
    title: 'Παναγιώτης Παλαμίδας — Μηχανικός Λογισμικού iOS',
    description:
      'Μηχανικός Λογισμικού iOS στην Αθήνα, στην εφαρμογή mobile banking της Eurobank. Παλαιότερα tech lead σε εφαρμογές για Zenith, Αθηναϊκή Ζυθοποιία, Sport24 και ΔΕΗ.',
  },

  nav: {
    about: 'προφίλ',
    work: 'έργα',
    openSource: 'open-source',
    side: 'προσωπικά',
    experience: 'εμπειρία',
    contact: 'επικοινωνία',
  },

  hero: {
    name: 'Παναγιώτης Παλαμίδας',
    tagline:
      'iOS Software Engineer στην Αθήνα. Από το πρώτο commit μέχρι το App Store, χτίζω εφαρμογές και τα θεμέλια πάνω στα οποία βασίζονται.',
    cvUrl: '/cv/palamidas-cv.pdf',
    cvLabel: 'ΛΗΨΗ ΒΙΟΓΡΑΦΙΚΟΥ',
    githubLabel: 'GITHUB',
    linkedinLabel: 'LINKEDIN',
    emailLabel: 'EMAIL',
    photoAlt: 'Παναγιώτης Παλαμίδας',
  },

  facts: [
    { label: 'ΤΟΠΟΘΕΣΙΑ', value: 'Αθήνα, GR' },
    { label: 'ΤΩΡΑ', value: 'Silvare · Eurobank' },
    { label: 'ΤΕΧΝΟΛΟΓΙΕΣ', value: 'SwiftUI · UIKit' },
    { label: 'ΑΠΟ ΤΟ', value: '2022' },
  ],

  about: {
    label: 'ΠΡΟΦΙΛ',
    paragraphs: [
      'Γράφω εφαρμογές iOS όπως θα ήθελα να τις παραλάβω: απλές, με σαφή όρια και ξεκάθαρα δομικά στοιχεία, χωρίς βιβλιοθήκες ή frameworks από τα οποία δεν μπορείς εύκολα να απεξαρτηθείς. Τον περισσότερο χρόνο μου τον αφιερώνω σε μια αρχιτεκτονική που μπορεί να εξελίσσεται μαζί με ένα προϊόν, αντί να γίνεται περιορισμός όσο αυτό μεγαλώνει.',
      'Τα τελευταία τέσσερα χρόνια έχω πάει εφαρμογές από την ιδέα μέχρι το App Store για Zenith, Αθηναϊκή Ζυθοποιία, Ολυμπιακή Ζυθοποιία, 24 Media, ΔΕΗ και ΔΕΠΑ — συχνά ως tech ή mobile lead, σχεδιάζοντας την αρχιτεκτονική και καθοδηγώντας την ομάδα που χτίζει πάνω της.',
      'Αυτή την περίοδο στη Silvare, εργάζομαι στο έργο της Eurobank.',
    ],
  },

  work: {
    label: 'ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ',
    apps: [
      { client: 'Eurobank',              name: 'Eurobank Mobile App', role: 'iOS Software Engineer' },
      { client: 'Zenith',                name: 'myZenith',      role: 'Tech Lead · iOS' },
      { client: 'Αθηναϊκή Ζυθοποιία',    name: 'My eBeer',      role: 'Mobile Lead · iOS' },
      { client: 'Ολυμπιακή Ζυθοποιία',   name: 'DraughtClub',   role: 'Mobile Lead · iOS' },
      { client: '24 Media',              name: 'Sport24',       role: 'Mobile Lead · iOS' },
      { client: 'Αυτοκινητόδρομος Αιγαίου',           name: 'MyEway',        role: 'iOS Developer' },
      { client: 'ΔΕΗ',                   name: 'myDEI',         role: 'iOS Developer' },
      { client: 'ΔΕΠΑ',                  name: 'myFisikon net', role: 'iOS Developer' },
      { client: 'Foodakai',              name: 'Foodakai',      role: 'iOS Developer' },
    ],
  },

  // Empty on purpose: the repos are private and nothing is released yet.
  side: {
    label: 'ΠΡΟΣΩΠΙΚΑ ΕΡΓΑ',
    intro: 'Φτιαγμένα για μένα, από την αρχή ως το τέλος.',
    items: [],
  },

  openSource: {
    label: 'OPEN SOURCE',
    name: 'pal-mvvm-foundation',
    meta: 'MIT · Swift 6 · iOS 17+',
    blurb:
      'Ένα Swift Package χωρίς εξαρτήσεις για εφαρμογές με MVVM + Coordinators — με το networking, το navigation, το persistence και το design system ως ξεχωριστά προϊόντα, ώστε να χρησιμοποιείς μόνο ό,τι χρειάζεσαι.',
    products: [
      { name: 'Networking',    note: 'Τυποποιημένα αιτήματα, χωρίς εξωτερικό client.' },
      { name: 'Navigation',    note: 'Πλοήγηση βασισμένη σε Coordinators.' },
      { name: 'Persistence',   note: 'Αποθήκευση πίσω από ένα σαφώς ορισμένο protocol.' },
      { name: 'Design System', note: 'Tokens και shared components.' },
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
    label: 'ΕΜΠΕΙΡΙΑ',
    roles: [
      {
        company: 'Silvare',
        title: 'iOS Software Engineer',
        period: '02/2026 — Σήμερα',
        location: 'Αθήνα, GR',
        summary:
          'Ανάπτυξη και συντήρηση λειτουργιών στην εφαρμογή της Eurobank, ένα από τα μεγαλύτερα καταναλωτικά τραπεζικά προϊόντα στην Ελλάδα. Κυρίως SwiftUI, παραλάλληλα με τα εκτενή υπάρχοντα επίπεδα UIKit, σε μεγάλο codebase και σε συνεργασία πολλές ομάδες.',
        bullets: [],
      },
      {
        company: 'Threenitas',
        title: 'iOS Software Engineer',
        period: '07/2022 — 01/2026',
        location: 'Αθήνα, GR',
        summary:
          'Παρέδωσα εφαρμογές iOS για εταιρικούς πελάτες στην ενέργεια, τα FMCG, τα μέσα και τις μεταφορές — tech ή mobile lead σε αρκετές.',
        bullets: [
          'Καθόρισα την αρχιτεκτονική και καθοδήγησα junior developers.',
          'Ανέλαβα εφαρμογές από την ιδέα ως την κυκλοφορία στο App Store και τη συνεχή συντήρηση.',
        ],
      },
      {
        company: 'Freedom SA Insurance Network',
        title: 'Software Engineer',
        period: '02/2022 — 06/2022',
        location: 'Αθήνα, GR',
        bullets: [
          'Συντήρησα και αναβάθμισα βάσεις δεδομένων SQL για ακρίβεια, απόδοση και αξιοπιστία.',
          'Ανέπτυξα Python scripts και web scrapers για συλλογή δεδομένων, αυτοματοποίηση και ενσωμάτωση σε υπάρχοντα συστήματα.',
        ],
      },
    ],
  },

  education: {
    label: 'ΣΠΟΥΔΕΣ',
    items: [
      {
        school: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών',
        degree: 'BSc, Πληροφορική και Τηλεπικοινωνίες',
        period: '09/2018 — 07/2023',
      },
    ],
    languagesLabel: 'ΓΛΩΣΣΕΣ',
    languages: ['Ελληνικά (μητρική)', 'Αγγλικά (άριστα)', 'Γαλλικά (μέτρια)'],
  },

  footer: {
    role: 'Μηχανικός Λογισμικού iOS · Αθήνα, Ελλάδα',
    emailLabel: 'Email',
    email: 'panagiotispalamidas@gmail.com',
    links: [
      { label: 'GitHub',   href: 'https://github.com/Mesrine23' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/panagiotis-palamidas/' },
    ],
    updated: 'Ενημερώθηκε Σεπτέμβριος 2026',
  },
};
