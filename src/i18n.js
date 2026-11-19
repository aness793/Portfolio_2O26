import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// The English text IS the key: t('Download CV') shows "Download CV" in English,
// and the matching entry in `fr` below in French. So there is no `en` block to maintain.
// If you edit an English sentence in a component, edit its key here too,
// otherwise French silently falls back to English for that sentence.

const fr = {
  // nav
  Work: 'Projets',
  Services: 'Services',
  About: 'À propos',
  Contact: 'Contact',
  Language: 'Langue',

  // landing
  'Full-Stack Developer | Telecommunication & Networking': 'Développeur Full-Stack | Télécommunications & Réseaux',
  'Real projects below. Fewer bugs than my first commit.': 'De vrais projets ci-dessous. Moins de bugs que mon premier commit.',
  Projects: 'Projets',
  'Download CV': 'Télécharger le CV',

  // projects
  'Featured Project': 'Projet à la une',
  'Other Projects': 'Autres projets',
  'AcciSense is an innovative accident detection system designed to enhance road safety and provide timely assistance in emergencies. Our platform utilizes advanced sensors and machine learning algorithms to detect accidents in real-time, allowing for rapid response and potentially saving lives.':
    "AcciSense est un système innovant de détection d'accidents conçu pour améliorer la sécurité routière et faciliter l'assistance en cas d'urgence. Notre plateforme s'appuie sur des capteurs avancés et des algorithmes d'apprentissage automatique pour détecter les accidents en temps réel, permettant une intervention rapide et pouvant sauver des vies.",
  Platform: 'Plateforme',
  Github: 'Github',
  Article: 'Article',

  // about
  Education: 'Formation',
  "Bachelor's degree in Electrical Engineering, followed by a Master's degree in Telecommunication Systems from Université Djilali Bounaama, Khemis Miliana.":
    "Licence en génie électrique, puis Master en systèmes de télécommunications à l'Université Djilali Bounaama, Khemis Miliana.",
  'Graduated with a thesis project (AcciSense) scoring 19.5/20, with the jury noting it as one of the strongest they had seen.':
    "Diplômé avec un projet de fin d'études (AcciSense) noté 19,5/20, le jury le considérant comme l'un des plus solides qu'il ait vus.",
  Career: 'Parcours',
  'Started with an internship at SPRK (Société des Produits Rouges), then a second internship at Algérie Télécom\'s transmission department in Khemis Miliana.':
    "J'ai débuté par un stage à la SPRK (Société des Produits Rouges), puis effectué un second stage au département transmission d'Algérie Télécom à Khemis Miliana.",
  'Freelancing since 2019, as a developer, and also doing data annotation, transcription, and translation work.':
    "Freelance depuis 2019 en tant que développeur, avec également des missions d'annotation de données, de transcription et de traduction.",
  'Recently shifted focus toward backend engineering: FastAPI, PostgreSQL, Redis, and Celery, building production-style systems like SecureAuth API.':
    "Récemment recentré sur l'ingénierie backend : FastAPI, PostgreSQL, Redis et Celery, pour construire des systèmes de type production comme SecureAuth API.",
  Achievements: 'Réalisations',
  '19.5/20 on Master\'s thesis (AcciSense), praised by the jury as one of the best projects presented.':
    "19,5/20 pour mon mémoire de Master (AcciSense), salué par le jury comme l'un des meilleurs projets présentés.",
  'Thesis reworked into an IEEE-format paper, published on ResearchGate.':
    'Mémoire retravaillé en article au format IEEE, publié sur ResearchGate.',
  '87.3% detection accuracy benchmarking three deep learning architectures (R3D-18, SlowFast R50, Video Swin Transformer).':
    '87,3 % de précision de détection en comparant trois architectures de deep learning (R3D-18, SlowFast R50, Video Swin Transformer).',
  Currently: 'Actuellement',
  'Deep in a backend sprint, FastAPI, PostgreSQL, SQLAlchemy, Redis, and Celery, building out SecureAuth API and other backend systems.':
    "En plein sprint backend : FastAPI, PostgreSQL, SQLAlchemy, Redis et Celery, pour développer SecureAuth API et d'autres systèmes backend.",
  'Actively job hunting for backend/full-stack roles, with an eye on eventually working abroad.':
    "À la recherche active d'un poste backend/full-stack, avec l'objectif de travailler à l'étranger à terme.",

  // services
  'Frontend Development': 'Développement Frontend',
  'Backend Development': 'Développement Backend',
  'Fullstack Development': 'Développement Fullstack',
  'ML Training': 'Entraînement de modèles ML',
  PyTorch: 'PyTorch',
  'Computer Vision': 'Vision par ordinateur',
  'Model Benchmarking': 'Benchmark de modèles',

  // contact
  'Algeria, Algiers': 'Algérie, Alger',
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    // localStorage unavailable, fall through
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: {} },
    fr: { translation: fr },
  },
  lng: getInitialLang(),
  fallbackLng: 'en',
  keySeparator: false, // keys are sentences containing "." and ":"
  nsSeparator: false,
  interpolation: { escapeValue: false },
})

// Runs on the initial language and on every i18n.changeLanguage(...),
// so components never touch localStorage themselves.
const applyLang = (lng) => {
  document.documentElement.lang = lng
  try {
    localStorage.setItem('lang', lng)
  } catch {
    // ignore
  }
}
applyLang(i18n.language)
i18n.on('languageChanged', applyLang)

export default i18n