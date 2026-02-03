import KasaShot from "../assets/img/projects/Kasa.webp";
import MonVieuxGrimoireShot from "../assets/img/projects/MonVieuxGrimoire.webp";
import PortfolioArchitecteShot from "../assets/img/projects/PortfolioArchitecte.webp";
import ToraAcademyShot from "../assets/img/projects/ToraAcademy.webp";

export const PROJECTS = [
  {
    id: "kasa",
    title: "Kasa — Location immobilière (React)",
    category: "frontend",
    screenshot: KasaShot,
    demo: "https://location-immo-kasa-react.vercel.app/",
    github:
      "https://github.com/Ryannds-dev/Projet-application-web-de-location-immobili-re-avec-React",
    tech: ["React", "React Router", "Sass", "Vite"],
    shortDesc:
      "Application SPA avec routage, pages dynamiques et composants réutilisables (collapse + carousel).",
    narrative: {
      contexte:
        "Projet OpenClassrooms : créer une application de location immobilière à partir d’une maquette et de données JSON.",
      objectifs:
        "Mettre en place un routage complet, une page logement dynamique, une page 404, et des composants interactifs (collapse, slideshow).",
      stack: "React, React Router, Sass, Vite. Données via fichier JSON.",
      competences:
        "Architecture de composants, routage SPA, gestion d’état (carousel/collapse), intégration fidèle à une maquette, responsive.",
      resultats:
        "Application fonctionnelle déployée sur Vercel, navigation fluide, composants réutilisables et gestion des routes invalides.",
      perspectives:
        "Améliorer l’accessibilité, optimiser encore les performances (lazy-loading images), et renforcer les tests UI.",
    },
  },

  {
    id: "architecte",
    title: "Portfolio Architecte — Admin & API (démo contrôlée)",
    category: "frontend",
    screenshot: PortfolioArchitecteShot,
    demo: null,
    github: "https://github.com/Ryannds-dev/Projet-portfolio-architecte.git",
    tech: ["JavaScript", "API", "Auth (token)", "CRUD (admin)"],
    shortDesc:
      "Interface avec authentification admin et gestion de galerie via API (ajout/suppression/modif).",
    narrative: {
      contexte:
        "Projet avec une API fournie : partie administration permettant de gérer une galerie (authentification requise).",
      objectifs:
        "Implémenter le flux de connexion et sécuriser les actions de modification côté interface (gestion token + appels API).",
      stack: "Front JavaScript + API fournie (auth + endpoints CRUD).",
      competences:
        "Consommation d’API, authentification, gestion de session/token, intégration d’un back existant, logique d’admin.",
      resultats:
        "Espace admin fonctionnel en local : connexion + actions de gestion de la galerie via API.",
      perspectives:
        "Déploiement en mode lecture seule (démo), sécurisation renforcée et déploiement d’un backend contrôlé.",
    },
    note: "Pas de démo publique : la partie admin repose sur une API/identifiants fournis pour l’exercice (risque de modifications).",
  },

  {
    id: "tora-academy",
    title: "Tora Academy — Prototype soutien scolaire (HTML/CSS/JS)",
    category: "frontend",
    screenshot: ToraAcademyShot,
    demo: "https://tora-academy.vercel.app/",
    github: "https://github.com/Ryannds-dev/tora-academy",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    shortDesc:
      "Site prototype : choix de classe, vidéo courte, QCM interactif (premier projet perso).",
    narrative: {
      contexte:
        "Projet personnel pour progresser vite en front : construire un site utile et simple pour collégiens.",
      objectifs:
        "Créer une navigation claire (accueil → classe → QCM), rendre le QCM interactif et garder une base sans framework.",
      stack: "HTML/CSS/JS pur + maquettes Figma. Pas de base de données.",
      competences:
        "DOM/events, structuration multi-pages, logique de quiz, organisation d’assets, premiers réflexes UX/responsive.",
      resultats:
        "Prototype fonctionnel en ligne, parcours utilisateur simple et interactions immédiates (QCM).",
      perspectives:
        "Refonte UI plus moderne, meilleure responsive, amélioration accessibilité et modularisation du JS.",
    },
  },

  {
    id: "mon-vieux-grimoire",
    title: "Mon Vieux Grimoire — API Node/Express (MongoDB)",
    category: "backend",
    screenshot: MonVieuxGrimoireShot,
    demo: "https://back-end-d-un-site-de-notation-de-l.vercel.app/",
    github: null,
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Sharp",
    ],
    shortDesc:
      "API sécurisée : auth JWT, CRUD livres, upload + optimisation images, notes et moyenne.",
    narrative: {
      contexte:
        "Projet OpenClassrooms : développer le backend d’un site de notation de livres avec authentification et gestion d’images.",
      objectifs:
        "Mettre en place une API REST sécurisée, gérer les utilisateurs, le CRUD des livres, l’upload image + optimisation, et la notation.",
      stack:
        "Node.js, Express, MongoDB, Mongoose, JWT. Multer + Sharp pour les images.",
      competences:
        "API REST, middleware auth, gestion fichiers, modélisation Mongo, règles métier (note unique/utilisateur + moyenne).",
      resultats:
        "API fonctionnelle : endpoints CRUD, sécurité JWT, traitement images, calcul averageRating, logique de rating contrôlée.",
      perspectives:
        "Ajout de tests (Jest/Supertest), rate limiting, validation stricte des entrées, logs et monitoring.",
    },
  },
];
