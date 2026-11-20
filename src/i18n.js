import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// The English text IS the key: t('Download CV') shows "Download CV" in English,
// and the matching entry in `fr` below in French. So there is no `en` block to maintain.
// Keys must match the strings in the components EXACTLY (spaces, apostrophes, punctuation).
// Anything not listed here (proper nouns, tech names) simply shows as written in both languages.

const fr = {
  // nav
  Work: 'Projets',
  Services: 'Services',
  About: 'À propos',
  Contact: 'Contact',
  Language: 'Langue',

  // landing
  'Full-Stack Developer | Telecommunication & Networking': 'Développeur Full-Stack | Télécommunications & Réseaux',
  'Full-Stack Developer': 'Développeur Full-Stack',
'Telecommunication & Networking': 'Télécommunications & Réseaux',
  'Real projects below. Fewer bugs than my first commit.': 'De vrais projets ci-dessous. Moins de bugs que mon premier commit.',
  Projects: 'Projets',
  'Download CV': 'Télécharger le CV',

  // projects
  'Featured Project': 'Projet à la une',
  'Other Projects': 'Autres projets',
  'A platform that detects road accidents in video and estimates how severe they are. Three video models (R3D-18, SlowFast, Video Swin) classify each clip as no accident, minor, moderate or major.':
    "Une plateforme qui détecte les accidents de la route dans des vidéos et estime leur gravité. Trois modèles vidéo (R3D-18, SlowFast, Video Swin) classent chaque clip comme pas d'accident, mineur, modéré ou majeur.",
  Platform: 'Plateforme',
  Github: 'Github',
  Article: 'Article',
  'Online shop with cash on delivery':
    'Boutique en ligne avec paiement à la livraison',
  'Fish catch log with photo, species, location, weight and condition. Import and export in CSV and JSON.':
    'Journal de captures de poissons avec photo, espèce, lieu, poids et état. Import et export en CSV et JSON.',

  // about: tabs
  Education: 'Formation',
  Experience: 'Expérience',
  Skills: 'Compétences',
  'Personal info': 'Informations personnelles',

  // about: education
  "Master's": 'Master',
  'Telecommunication Systems': 'Systèmes de télécommunications',
  "Bachelor's": 'Licence',
  'Electrical Engineering': 'Génie électrique',
  Thesis: 'Mémoire',
  'Accident detection and severity estimation using Deep Learning models':
    "Détection d'accidents et estimation de leur gravité à l'aide de modèles de Deep Learning",
  'Graded 19.75/20': 'Note : 19,75/20',

  // about: experience
  '2022 to now': "2022 à aujourd'hui",
  'Freelance developer': 'Développeur freelance',
  'Full-stack development': 'Développement full-stack',
  'Dec 2025 - Mar 2026': 'Déc. 2025 - mars 2026',
  'Algérie Télécom - Network Engineering Intern': 'Algérie Télécom - Stagiaire ingénieur réseaux',
  'Transmission department, Khemis Miliana': 'Département transmission, Khemis Miliana',
  'Dec 2022- Jan 2023': 'Déc. 2022 - janv. 2023',

  // about: skills (the Frontend and Backend lists are tech names only, so they need no entry)
  'Machine learning': 'Apprentissage automatique',
  Telecom: 'Télécoms',
  'PyTorch, computer vision, R3D-18, SlowFast R50, Video Swin Transformer, quantization and pruning.':
    'PyTorch, vision par ordinateur, R3D-18, SlowFast R50, Video Swin Transformer, quantification et élagage.',
  'MATLAB, Simulink, Cisco Packet Tracer, ATOLL, Python, Git, COFDM, LDPC channel coding, image, video and audio processing.':
    "MATLAB, Simulink, Cisco Packet Tracer, ATOLL, Python, Git, COFDM, codage de canal LDPC, traitement d'images, de vidéos et de l'audio.",

  // about: personal info
  'Based in': 'Basé à',
  'Khemis Miliana, Algeria': 'Khemis Miliana, Algérie',
  'Open to': 'Ouvert à',
  'Web development and networking roles': 'Postes en développement web et en réseaux',
  Relocation: 'Mobilité',
  'Yes, ready to move': 'Oui, prêt à déménager',
  Interests: "Centres d'intérêt",
  'Anything IT-related': "Tout ce qui touche à l'informatique",

  // services
  'Frontend Development': 'Développement Frontend',
  'Backend Development': 'Développement Backend',
  'Fullstack Development': 'Développement Fullstack',
  'ML Training': 'Entraînement de modèles ML',
  PyTorch: 'PyTorch',
  'Computer Vision': 'Vision par ordinateur',
  'Model Benchmarking': 'Benchmark de modèles',

  // contact
  'Scrolled this far? Say hi.': "Arrivé jusqu'ici ? Dites bonjour.",
  'Back to top': 'Retour en haut',
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