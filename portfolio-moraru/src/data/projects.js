const BASE = import.meta.env.BASE_URL;

const projectCatalogByLanguage = {
  it: [
    {
      title: "Spotify Clone",
      description:
        "Replica minimale dell'interfaccia di Spotify con layout responsive e player fittizio.",
      tech: ["HTML", "CSS"],
      image: "spotify-clone.png",
      demoUrl: "https://moraru-stefan.github.io/html-css-spotifyweb/",
      codeUrl: "https://github.com/moraru-stefan/html-css-spotifyweb",
    },
    {
      title: "SmartphoneHub - Comparatore",
      description:
        "SPA sviluppata con React e Vite per sfogliare, filtrare e confrontare smartphone, salvare preferiti e vedere i dettagli di ogni modello.",
      tech: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
      image: "smartphonehub.png",
      demoUrl: "https://smartphonehub-front.onrender.com/",
      codeUrl:
        "https://github.com/Steopa2001/progetto-finale-spec-frontend-front",
    },
    {
      title: "To-Do List - Task Manager",
      description:
        "Applicazione SPA sviluppata con React e Vite che permette di creare, completare e rimuovere task in modo intuitivo.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      image: "to-do-list.png",
      demoUrl: "https://moraru-stefan.github.io/to-do-list/",
      codeUrl: "https://github.com/moraru-stefan/to-do-list",
    },
  ],
  en: [
    {
      title: "Spotify Clone",
      description:
        "Minimal recreation of Spotify's interface with a responsive layout and a mock player.",
      tech: ["HTML", "CSS"],
      image: "spotify-clone.png",
      demoUrl: "https://moraru-stefan.github.io/html-css-spotifyweb/",
      codeUrl: "https://github.com/moraru-stefan/html-css-spotifyweb",
    },
    {
      title: "SmartphoneHub - Comparator",
      description:
        "SPA built with React and Vite to browse, filter, and compare smartphones, save favorites, and view full model details.",
      tech: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
      image: "smartphonehub.png",
      demoUrl: "https://smartphonehub-front.onrender.com/",
      codeUrl:
        "https://github.com/Steopa2001/progetto-finale-spec-frontend-front",
    },
    {
      title: "To-Do List - Task Manager",
      description:
        "SPA built with React and Vite that lets users create, complete, and remove tasks with a clean and intuitive workflow.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      image: "to-do-list.png",
      demoUrl: "https://moraru-stefan.github.io/to-do-list/",
      codeUrl: "https://github.com/moraru-stefan/to-do-list",
    },
  ],
  es: [
    {
      title: "Spotify Clone",
      description:
        "Replica minima de la interfaz de Spotify con disenio responsive y reproductor simulado.",
      tech: ["HTML", "CSS"],
      image: "spotify-clone.png",
      demoUrl: "https://moraru-stefan.github.io/html-css-spotifyweb/",
      codeUrl: "https://github.com/moraru-stefan/html-css-spotifyweb",
    },
    {
      title: "SmartphoneHub - Comparador",
      description:
        "SPA desarrollada con React y Vite para explorar, filtrar y comparar smartphones, guardar favoritos y ver detalles completos.",
      tech: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
      image: "smartphonehub.png",
      demoUrl: "https://smartphonehub-front.onrender.com/",
      codeUrl:
        "https://github.com/Steopa2001/progetto-finale-spec-frontend-front",
    },
    {
      title: "To-Do List - Gestor de tareas",
      description:
        "Aplicacion SPA creada con React y Vite que permite crear, completar y eliminar tareas de forma simple e intuitiva.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      image: "to-do-list.png",
      demoUrl: "https://moraru-stefan.github.io/to-do-list/",
      codeUrl: "https://github.com/moraru-stefan/to-do-list",
    },
  ],
  ro: [
    {
      title: "Spotify Clone",
      description:
        "Replica minimala a interfetei Spotify, cu layout responsive si player simulat.",
      tech: ["HTML", "CSS"],
      image: "spotify-clone.png",
      demoUrl: "https://moraru-stefan.github.io/html-css-spotifyweb/",
      codeUrl: "https://github.com/moraru-stefan/html-css-spotifyweb",
    },
    {
      title: "SmartphoneHub - Comparator",
      description:
        "SPA dezvoltata cu React si Vite pentru a explora, filtra si compara smartphone-uri, salva favorite si vedea detalii complete.",
      tech: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
      image: "smartphonehub.png",
      demoUrl: "https://smartphonehub-front.onrender.com/",
      codeUrl:
        "https://github.com/Steopa2001/progetto-finale-spec-frontend-front",
    },
    {
      title: "To-Do List - Manager de taskuri",
      description:
        "Aplicatie SPA realizata cu React si Vite care permite crearea, completarea si stergerea taskurilor intr-un flux simplu.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      image: "to-do-list.png",
      demoUrl: "https://moraru-stefan.github.io/to-do-list/",
      codeUrl: "https://github.com/moraru-stefan/to-do-list",
    },
  ],
};

const withBaseUrl = (projects) =>
  projects.map((project) => ({
    ...project,
    image: `${BASE}${project.image}`,
  }));

const projectCatalogWithAssets = Object.fromEntries(
  Object.entries(projectCatalogByLanguage).map(([language, projects]) => [
    language,
    withBaseUrl(projects),
  ]),
);

export const getProjectsData = (language = "it") =>
  projectCatalogWithAssets[language] || projectCatalogWithAssets.it;

export default getProjectsData;
