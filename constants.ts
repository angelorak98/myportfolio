import type { Project, Experience, Formation } from './types';

export const skills: string[] = [
  "Python", "Flask", "Django", "Web Scraping", "Data Analysis", "SQL", "Pandas", "NumPy", 
  "Matplotlib", "API REST", "Git", "Docker", "Tailwind CSS", "FastAPI"
];

export const projects: Project[] = [
  {
    title: "Application Web E-commerce",
    description: "Développement d'une application de commerce électronique complète avec Flask, Stripe pour les paiements, et une base de données PostgreSQL. Inclut un panier d'achat, un système de gestion des commandes et une interface administrateur.",
    technologies: ["Flask", "PostgreSQL", "Stripe API", "Jinja2", "HTML/CSS"],
    link: "https://www.moramarket.mg/?srsltid=AfmBOop5SSFF7q5drXHf4iPrKUkJXh8yU6a8HyxVSRjDZC_RrgR9iDNj"
  },
  {
    title: "Outil d'Analyse de Sentiment",
    description: "Un script Python qui utilise des techniques de traitement du langage naturel (NLP) pour analyser le sentiment de textes. Intégration avec des API de réseaux sociaux pour la collecte de données.",
    technologies: ["Python", "NLTK", "TextBlob", "Tweepy", "Pandas"],
    link: "#"
  },
  {
    title: "Scripts d'Automatisation de Scraping",
    description: "Création de scripts avancés pour le web scraping éthique, la manipulation et l'analyse de données pour des missions en freelance. Automatisation de la collecte de données pour générer des insights.",
    technologies: ["Python", "Beautiful Soup", "Pandas", "Scrapy"],
    link: "https://github.com/angelorak98/twitter_scrapy"
  },
  {
    title: "Automatisation de Rapports Excel",
    description: "Script Python pour générer automatiquement des rapports financiers à partir de données brutes. Utilise OpenPyXL pour lire et écrire des fichiers Excel, et Pandas pour la manipulation des données.",
    technologies: ["Python", "Pandas", "OpenPyXL"],
    link: "https://github.com/angelorak98/excel-report-automation"
  }
];

export const experiences: Experience[] = [
  {
    role: "Développeur Python",
    company: "Mada Assist",
    period: "Fév. 2024 - Présent",
    description: "Développement et maintenance d'applications web backend en Python/Django, implémentation d'API RESTful, analyse de données, création de tableaux de bord et intégration de solutions de paiement."
  },
  {
    role: "Développeur Python Freelance",
    company: "Missions Indépendantes",
    period: "2023 - Présent",
    description: "Spécialisé en web scraping avancé et analyse de données. Développement de scripts d'automatisation pour la collecte de données et création de pipelines pour la manipulation et l'analyse de données."
  },
  {
    role: "Développeur Python (Stagiaire)",
    company: "Orange",
    period: "Juil. 2023 - Jan. 2024",
    description: "Participation au développement d'un outil d'automatisation, contribution à la documentation technique, maintenance et débogage."
  }
];

export const formations: Formation[] = [
    {
        degree: "Formation Autodidacte",
        school: "CodeAvecJonathan",
        year: "Continu",
        specialization: "Scraping éthique et avancé, manipulation et analyse de données."
    },
    {
        degree: "Maitrise",
        school: "Ecole Nationale d'Informatique (ENI)",
        year: "2015 - 2019",
        specialization: "Ingénierie logicielle. L'ENI est reconnue comme le premier centre de formation et de recherche en informatique à Madagascar, formant des ingénieurs qualifiés pour le secteur technologique."
    },
    {
        degree: "Baccalauréat",
        school: "Lycée Privé ACEEM",
        year: "2015",
        specialization: "Série C"
    }
];