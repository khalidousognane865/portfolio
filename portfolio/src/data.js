// ============================================================
// 👋 PERSONALISE TOUT ICI — C'est le seul fichier à modifier
//    pour mettre à jour ton contenu (nom, projets, skills, etc.)
// ============================================================

export const profile = {
  name: "Khalidou SOGNANE",               // 
  title: "Data Engineer & IA",
  subtitle: "Jeune ingénieur passionné par l'écosystème de la donnée,\nje combine des compétences en architecture Big Data et en intelligence artificielle pour valoriser l'information à chaque étape. \nDe l'automatisation de pipelines complexes à l'orchestration de modèles de langage (LLM/RAG),\n j'apporte une vision transverse et polyvalente aux projets.",
  location: "Dakar, Sénégal",
  email: "khalidousognane@gmail.com",    // ← ton email
  github: "https://github.com/khalidousognane865",   // ← ton GitHub
  linkedin: "https://www.linkedin.com/in/khalidou-sognane-a71a76272/", // ← ton LinkedIn
  cvUrl: "/CV_Khalidou_SOGNANE_16_6_26.pdf",                 // ← place ton CV dans /public/cv.pdf
  photo: "/photo.jpg",              // ← place ta photo dans /public/photo.jpg
  available: true,                  // false si tu n'es pas dispo
};

export const skills = [
  // Catégorie 1
  {
    category: "Data Engineering",
    items: [
      { name: "Python", level: 90 },
      { name: "Apache Airflow", level: 75 },
      { name: "Apache Spark", level: 70 },
      { name: "SQL / dbt", level: 85 },
      { name: "Docker", level: 75 },
    ]
  },
  // Catégorie 2
  {
    category: "Machine Learning & IA",
    items: [
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow / Keras", level: 65 },
      { name: "MLflow", level: 70 },
      { name: "FastAPI", level: 72 },
      { name: "Pandas / NumPy", level: 90 },
    ]
  },
  // Catégorie 3
  {
    category: "Outils & Cloud",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Streamlit", level: 78 },
      { name: "Linux / Bash", level: 70 },
      { name: "Kaggle / Colab", level: 80 },
    ]
  },
];

export const projects = [
  {
    id: 1,
    title: "Pipeline ETL — Qualité de l'Air",
    description: "Pipeline de données end-to-end collectant des mesures de qualité de l'air (PM2.5, NO2) depuis l'API OpenAQ pour 10 villes africaines, orchestré avec Airflow et visualisé sur un dashboard Streamlit interactif.",
    tags: ["Python", "Airflow", "Docker", "Streamlit", "OpenAQ API", "PostgreSQL"],
    github: "https://github.com/tonpseudo/air-quality-pipeline",
    demo: "https://air-quality.streamlit.app",
    status: "En cours",     // "Terminé" | "En cours"
    highlight: true,        // mis en avant sur la page d'accueil
  },
  {
    id: 2,
    title: "Système de Recommandation de Films",
    description: "Système de recommandation collaboratif et content-based entraîné sur MovieLens 25M, avec tracking MLflow, API FastAPI déployée sur Render et interface de démo interactive.",
    tags: ["Python", "MLflow", "FastAPI", "Scikit-learn", "Docker", "MovieLens"],
    github: "https://github.com/tonpseudo/movie-recommender",
    demo: "https://movie-recommender.onrender.com",
    status: "En cours",
    highlight: true,
  },
  {
    id: 3,
    title: "Analyse Prédictive — Marchés Agricoles Africains",
    description: "Analyse des prix alimentaires (mil, maïs, riz) dans 5 pays d'Afrique de l'Ouest avec détection d'anomalies, modèles de prévision Prophet/SARIMA et dashboard cartographique interactif.",
    tags: ["Python", "Prophet", "Pandas", "Streamlit", "FAO Data", "Geopandas"],
    github: "https://github.com/tonpseudo/agri-markets-africa",
    demo: "https://agri-markets.streamlit.app",
    status: "En cours",
    highlight: true,
  },
  {
    id: 4,
    title: "Système RAG Multimodal & Agent IA Éducatif",
    description: "Architecture end-to-end d'un système tutoriel basé sur les programmes officiels de collège. Ingestion automatisée, chunking sémantique, intégration d'un module VLM pour la gestion des images, et réduction complète des hallucinations ancrée sur des sources vérifiées.",
    tags: ["LangChain", "Mistral", "FAISS", "ChromaDB", "Gradio", "PyMuPDF", "VLM"],
    github: "https://github.com/khalidousognane865/Memoire_Education_Rag",
    demo: "", // À compléter si disponible
    status: "Terminé",
    highlight: true,
  },
  {
    id: 5,
    title: "Pipeline Big Data Streaming — Application Taxi",
    description: "Conception du backend temps réel d'estimation de distance et de prix de trajets de taxi. Ingestion de flux continus, indexation de données géospatiales et monitoring en temps réel via un tableau de bord dynamique et tolérant aux pannes.",
    tags: ["PySpark", "Apache Kafka", "Apache NiFi", "Elasticsearch", "Kibana"],
    github: "",
    demo: "", 
    status: "Terminé",
    highlight: true,
  },
  {
    id: 6,
    title: "Analyse des trajets Citibike NYC",
    description: "Traitement et transformation de plus de 10 millions de trajets réels sur un cluster distribué. Analyse descriptive des volumes temporels et des durées moyennes pour identifier visuellement les stations sous-capacitaires.",
    tags: ["PySpark", "AWS EMR", "AWS S3", "Hue", "Python"],
    github: "",
    demo: "",
    status: "Terminé",
    highlight: false,
  },
  {
    id: 7,
    title: "Prédiction de Risques Cardiovasculaires",
    description: "Étude et comparaison d'algorithmes de classification (Régression Logistique, SVM, Random Forest) sur un jeu de données médicales réelles avec optimisation de la précision sur la classe minoritaire.",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    github: "",
    demo: "",
    status: "Terminé",
    highlight: false,
  }
];

export const parcours = [
  {
    year: "2024 - 2026",
    title: "Master 2 — Ingénierie des Données & IA (Mention Bien)",
    org: "Université Iba Der Thiam, Thiès",
    type: "formation", // Permet de filtrer ou d'afficher une icône différente (ex: Chapeau de diplômé)
    description: "Conception et architecture end-to-end d'un système RAG multimodal et d'un agent IA pour l'éducation (LangChain, Ollama, FAISS) avec réduction des hallucinations.",
  },
  {
    year: "2026 (7 - 13 Juin)",
    title: "Enquêteur Terrain",
    org: "MCA (Millennium Challenge Account) — Kaolack",
    type: "experience", // Permet d'afficher une icône de valise/travail
    description: "Mission intensive de collecte et de traitement de données quantitatives et qualitatives sur le terrain.",
  },
  {
    year: "2026 (Avril - Juin)",
    title: "Prestataire Télé-enquêteur",
    org: "Ipsos",
    type: "experience",
    description: "Conduite d'enquêtes d'opinion et collectes de données statistiques par téléphone.",
  },
  {
    year: "2023 - 2024",
    title: "Master 1 — Science des Données (Major de promotion)",
    org: "Université Iba Der Thiam, Thiès",
    type: "formation",
    description: "Spécialisation en Big Data, calcul distribué et streaming (PySpark, Kafka, NiFi) appliqués à des cas réels.",
  },
  {
    year: "2019 - 2023",
    title: "Licence MPI — Spécialité Informatique (Major L3)",
    org: "Université Assane Seck, Ziguinchor",
    type: "formation",
    description: "Bases solides en algorithmique, structures de données et mathématiques. Mission de tutorat et d'encadrement des nouveaux étudiants.",
  },
  {
    year: "2019",
    title: "Baccalauréat S2",
    org: "Sénégal",
    type: "formation",
    description: "Série Scientifique (Sciences Expérimentales).",
  }
];