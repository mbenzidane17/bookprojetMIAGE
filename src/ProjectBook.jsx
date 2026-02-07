import { useMemo, useState } from "react";

// ---------- Image de couverture avec fallback auto ----------
function CoverImage({ project, className }) {
  const candidates = useMemo(() => {
    const base = project.imageName || project.id; // possibilité de forcer un nom de fichier
    return [`/images/${base}.png`, `/images/${base}.jpg`, `/images/${base}.webp`];
  }, [project]);
  const [idx, setIdx] = useState(0);
  const isFallback = idx >= candidates.length;
  const src = isFallback
    ? `https://placehold.co/800x500/png?text=${encodeURIComponent(project.title)}`
    : candidates[idx];
  return (
    <img
      src={src}
      alt={project.images?.[0]?.alt || project.title}
      onError={() => setIdx((i) => i + 1)}
      className={className}
    />
  );
}

// ---------- Données projets ----------
const PROJECTS = [
  {
    id: "gamedu",
    title: "GamÉdu — Mini-jeux pour apprendre",
    period: "2025",
    role: "Cheffe de projet / UI",
    context: "Projet académique (L2)",
    problem: "Transformer des chapitres de cours en mini-jeux engageants.",
    solution:
      "Prototype React avec gestion de sprints (Agile), backlog Trello, tests d'usabilité.",
    impact:
      "Prototype fonctionnel, soutenance notée, retours positifs des pairs (N=25).",
    tech: ["React", "Tailwind", "Trello", "Figma"],
    tags: ["Gestion de projet", "EdTech", "Front-end"],
  
  },
  {
    id: "portfolio-creation",
    title: "Création d’un portfolio professionnel",
    period: "2025",
    role: "Front-end / Design",
    context: "Projet personnel",
    problem:
      "Créer une vitrine claire et interactive pour présenter mes projets MIAGE et mes compétences.",
    solution:
      "Conception d’un site moderne avec React et Tailwind, section projets et lien CV intégré.",
    impact: "Portfolio utilisé dans mes candidatures, accessible via mon CV.",
    tech: ["React", "Tailwind", "HTML/CSS"],
    tags: ["Portfolio", "Web", "Design"],
    links: { demo: "https://postfolioo.netlify.app" },
  },
  {
    id: "syntaxe-arbre",
    title: "Manipulation d’un arbre syntaxique et documentation du projet",
    period: "2025",
    role: "Développeuse Python / Documentation",
    context: "Projet universitaire — Université Paris Nanterre",
    problem:
      "Construire et manipuler un arbre syntaxique (AST) pour interpréter des structures de code, et livrer une documentation technique propre et réutilisable.",
    solution: `Parser Python produisant un AST (nœuds typés, enfants, métadonnées). Parcours pré/in/post-ordre et fonctions utilitaires (recherche, substitution de sous-arbres). Détection d’erreurs lexicales/syntaxiques avec messages contextualisés. Export Graphviz/DOT pour visualiser l’AST.\nDocumentation LaTeX professionnelle basée sur un gabarit personnalisé : page de garde et métadonnées paramétrables via commandes (\\ecole, \\entreprise=Université Paris Nanterre, \\datedebut, \\datefin, \\directeur, \\encadrant, \\membrea etc.). Intégration logos, pagination et compilation PDF automatisée.`,
    impact:
      "Code maintenable + visualisation facilitée; documentation homogène et réutilisable.",
    tech: ["Python", "LaTeX", "Graphviz"],
    tags: ["Python", "Documentation", "Structure de données", "LaTeX"],

  },
  {
    id: "markov-redaction",
    title: "Rédaction mathématique — Chaîne de Markov",
    period: "2025",
    role: "Rédaction scientifique / Dev outillage",
    context: "Projet universitaire",
    problem:
      "Formaliser rigoureusement les propriétés clés des chaînes de Markov et produire un support pédagogique clair.",
    solution:
      "Document LaTeX structuré (titlepage, sommaire, tcolorbox, hyperref). Aspect informatique : scripts Python (NumPy) pour simuler des chaînes, calculer P^m et vérifier la mesure invariante; figures Matplotlib intégrées au PDF; Makefile (latexmk) pour compilation reproductible.",
    impact:
      "Lien théorie ↔ pratique : validation numérique des résultats; reproductibilité en une commande.",
    tech: ["LaTeX", "Python", "NumPy", "Matplotlib", "Makefile"],
    tags: ["Maths", "Probabilités", "LaTeX", "Python"],

  },
  {
    id: "ia-wordle",
    title: "Comparaison expérimentale de différentes IA pour un jeu de mots",
    period: "2025",
    role: "Développement / Gestion de projet",
    context: "Projet universitaire",
    problem:
      "Créer un jeu de mots type Wordle et comparer les performances de différentes IA pour le résoudre.",
    solution:
      "Frontend web (HTML/CSS/JS) + backend Flask. IA symbolique (fréquences de lettres) et intégration GPT-2 (Transformers + PyTorch). Outils : VS Code, Git, venv. Features: 'Comparateur IA', 'Comparateur Échantillons', 'Joker', manuel utilisateur.",
    impact:
      "Exploration des limites des LLM sans feedback; optimisation de boucles; documentation et manuel utilisateur.",
    tech: [
      "Python",
      "Flask",
      "Transformers",
      "PyTorch",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    tags: ["IA", "NLP", "Jeu", "Gestion de projet", "Flask"],
    links: { repo: "https://github.com/mbenzidane17/Projet-Algo" },
  },
  {
    id: "analyse-metal-lithium",
    title: "Matières premières critiques — Focus Lithium (R)",
    period: "22 mai 2025",
    role: "Data Analyst / R",
    context: "Revue & analyse de données (UE / MPC)",
    problem:
      "Qualifier les risques liés aux MPC et analyser la dynamique du lithium (production, réserves, concentration, volatilité).",
    solution:
      "Revue structurée + pipeline RStudio à partir de Criticalmineralsextraction.xlsx (tidyverse, ggplot2, RMarkdown). Graphiques: top pays, croissance annuelle, corrélation prod–réserves, carte 2020, HHI, volatilité (CV), ACP.",
    impact:
      "Croissance accélérée (Australie/Chine), concentration élevée (HHI), corrélation réserves/production.",
    tech: ["R", "tidyverse", "ggplot2", "RMarkdown"],
    tags: ["DataViz", "R", "Lithium", "MPC"],
  },

  // ======= PROJETS DU FICHIER 1 (en cours) =======
 

  {
    id: "votes-deputes-c",
    title: "À la recherche de mon député idéal — Analyse des votes (C & Python)",
    period: "30 sept. 2024 – 31 déc. 2024",
    role: "Développeuse — Parsing, analyse & UI",
    context: "Projet universitaire (données publiques Assemblée nationale)",
    problem:
      "Identifier, à partir des votes réels, les députés les plus proches des convictions d’un utilisateur.",
    solution:
      "Traitement de 1 242 XML (députés) et 4 417 XML (scrutins). Mapping +1/−1/0, matrice députés×lois, similarité cosinus (scikit-learn), clustering hiérarchique (Ward, SciPy) avec seuil 40 et filtre ≥20 membres. Dendrogramme (Matplotlib). Interface QCM Flask + Jinja2 (top 3 députés), exports CSV/PNG. Frontend Bootstrap, Chart.js, jQuery; structure modulaire (app.py, utils.py, templates/, static/).",
    impact:
      "Pipeline bout-en-bout reproductible; visualisation claire des clusters; temps de réponse interactif.",
    tech: [
      "C",
      "Python",
      "Flask",
      "NumPy",
      "Pandas",
      "SciPy",
      "scikit-learn",
      "Matplotlib",
      "XML",
      "Chart.js",
      "Bootstrap",
      "jQuery",
    ],
    tags: ["Programmation", "Clustering", "Data", "Web"],
  },
  {
    id: "dataviz-velos",
    title: "Visualisation de données — Analyse des stations de vélos",
    period: "2025",
    role: "Data Analyst / Excel",
    context: "Projet universitaire",
    problem:
      "Quelle proportion des stations ont > 50 % de capacité disponible pour garer un vélo ?",
    solution: "Nettoyage et analyse de bases de données, visualisations dans Excel.",
    impact: "Analyse claire de la disponibilité des stations.",
    tech: ["Excel", "Base de données"],
    tags: ["DataViz", "Excel", "Analyse"],
    links: {},
  },

  // ======= NOUVEAUX PROJETS AJOUTÉS (provenant du fichier 2) =======

  {
    id: "pgi-automobile",
    title: "PGI Automobile — Système d'information complet",
    period: "2025",
    role: "Analyste / Cheffe de projet / Développeuse",
    context: "Projet de groupe universitaire",
    problem:
      "Concevoir et développer un système d'information complet (PGI) pour la gestion d'une concession automobile.",
    solution:
      "Analyse des besoins, modélisation UML et Merise, conception du modèle de données. Développement d'une application web PHP avec interface utilisateur complète, gestion des stocks, clients, ventes et rapports. Livrables complets disponibles sur GitHub.",
    impact:
      "Système fonctionnel déployé avec interface intuitive, documentation technique complète et livrables professionnels.",
    tech: ["PHP", "MySQL", "UML", "Merise", "HTML", "CSS", "JavaScript"],
    tags: ["SI", "Gestion de projet", "Analyse", "Web", "Base de données"],
    links: {
      demo: "https://projetenweb.fwh.is/PGI-Automobile-main/accueil.php?i=1",
      repo: "https://github.com/Tibxla/PGI-Automobile",
    },
  },
  {
    id: "tutorat-web-app",
    title: "Gestion du tutorat universitaire",
    period: "2025",
    role: "Cheffe de projet / Développeuse Full-stack",
    context: "Projet web universitaire",
    problem:
      "Faciliter l'organisation du tutorat via une application centralisée pour étudiants, tuteurs et administrateurs.",
    solution:
      "Développement d'une application web complète avec authentification multi-rôles (étudiants, tuteurs, administrateurs), gestion des séances, plannings interactifs et tableau de bord personnalisé pour chaque type d'utilisateur.",
    impact:
      "Application déployée et fonctionnelle, simplifiant la gestion des séances de tutorat pour tous les acteurs.",
    tech: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript"],
    tags: ["Web", "Gestion de projet", "Application", "Flask"],
    links: { demo: "https://mbenzidane17.pythonanywhere.com/" },
  },
  {
    id: "portfolio-si",
    title: "Portfolio scolaire — Système d'information",
    period: "2025",
    role: "Développeuse / Designer",
    context: "Projet personnel académique",
    problem:
      "Organiser mes cours et préparer mes soutenances de projet de manière structurée et professionnelle.",
    solution:
      "Conception d'un portfolio web dédié à l'organisation de mes ressources académiques, avec navigation claire par matière et projet, permettant une préparation optimale des soutenances.",
    impact:
      "Outil personnel efficace pour la gestion de mes cours et la préparation de mes présentations de projets.",
    tech: ["React", "CSS", "JavaScript", "Netlify"],
    tags: ["Portfolio", "Web", "SI", "Organisation"],
    links: { demo: "https://eclectic-bublanina-ac5d48.netlify.app/" },
  },

  // ========== PROJETS EN COURS (ajoutés) ==========
  {
    id: "theorie-graphes",
    status: "en_cours",
    title: "Génération automatique de contre-exemples et conjectures",
    period: "2025-2026 (en cours)",
    role: "Développeuse / Chercheuse",
    context: "Projet universitaire — Théorie des graphes",
    problem:
      "Automatiser la génération de contre-exemples et la formulation de conjectures en théorie des graphes.",
    solution:
      "Développement d'algorithmes pour explorer l'espace des graphes, identifier des propriétés structurelles et générer automatiquement des contre-exemples à des conjectures existantes ou proposer de nouvelles conjectures.",
    impact:
      "Projet en cours — exploration des limites de l'automatisation en mathématiques discrètes.",
    tech: ["Python", "NetworkX", "Algorithmes", "Mathématiques"],
    tags: ["Maths", "Graphes", "Algorithmes", "Recherche"],
    links: {},
  },
  {
    id: "recherche-operationnelle",
    status: "en_cours",
    title: "Projet en Recherche Opérationnelle",
    period: "2025-2026 (en cours)",
    role: "Analyste / Développeuse",
    context: "Projet universitaire — Optimisation",
    problem:
      "Résoudre des problèmes d'optimisation complexes à l'aide de méthodes de recherche opérationnelle.",
    solution:
      "Modélisation mathématique, programmation linéaire et non-linéaire, algorithmes d'optimisation (simplexe, branch & bound, métaheuristiques).",
    impact: "Projet en cours — application des techniques d'optimisation à des cas réels.",
    tech: ["Python", "CPLEX", "Gurobi", "Optimisation", "Modélisation"],
    tags: ["Optimisation", "Maths", "Algorithmes", "Recherche opérationnelle"],
    links: {},
  },
  {
    id: "assistant-ia-etudiants",
    status: "en_cours",
    title: "Assistant IA pour étudiants",
    period: "2025-2026 (en cours)",
    role: "Cheffe de projet / Développeuse IA",
    context: "Projet personnel — IA appliquée",
    problem:
      "Créer un assistant intelligent complet pour accompagner les étudiants dans leur parcours académique.",
    solution:
      "Développement d'un produit IA full-stack avec interface conversationnelle, aide à la rédaction, résumé de cours, génération de quiz, et suivi personnalisé des apprentissages. Intégration de LLM et techniques de prompt engineering avancées.",
    impact:
      "Projet ambitieux en cours — vise à révolutionner l'accompagnement étudiant grâce à l'IA.",
    tech: ["Python", "LangChain", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
    tags: ["IA", "EdTech", "LLM", "Full-stack", "Produit"],
    links: {},
  },
  {
    id: "chatbot-rag-entreprise",
    status: "en_cours",
    title: "Chatbot RAG pour entreprise",
    period: "2025-2026 (en cours)",
    role: "Développeuse IA / Architecte",
    context: "Projet universitaire — IA & Entreprise",
    problem:
      "Permettre aux entreprises d'exploiter leurs documents internes via un chatbot intelligent.",
    solution:
      "Implémentation d'une architecture RAG (Retrieval-Augmented Generation) : indexation vectorielle des documents (embeddings), recherche sémantique, génération de réponses contextualisées avec citation des sources. Pipeline de traitement documentaire automatisé.",
    impact:
      "Projet très recherché en entreprise — en cours de développement avec cas d'usage concrets.",
    tech: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI", "Docker"],
    tags: ["IA", "RAG", "NLP", "Entreprise", "LLM"],
    links: {},
  },
  {
    id: "aide-decision-data",
    status: "en_cours",
    title: "Aide à la décision basée sur les données",
    period: "2025-2026 (en cours)",
    role: "Data Analyst / Développeuse",
    context: "Projet universitaire — MIAGE & Data Science",
    problem:
      "Concevoir un système d'aide à la décision exploitant les données pour éclairer les choix stratégiques.",
    solution:
      "Construction de tableaux de bord interactifs, modèles prédictifs (Machine Learning), analyse statistique avancée et visualisations dynamiques pour transformer les données brutes en insights actionnables.",
    impact:
      "Projet MIAGE pur et dur — en cours, combinant compétences SI et data science.",
    tech: ["Python", "Pandas", "Scikit-learn", "Plotly", "Dash", "SQL"],
    tags: ["Data", "IA", "Machine Learning", "SI", "Décisionnel"],
    links: {},
  },
];

const TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

// ---------- UI ----------
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

function TechList({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="text-left w-full h-full group rounded-2xl border hover:shadow-lg transition p-4 bg-white/70 backdrop-blur"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
        {project.status === "en_cours" && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-amber-500/90 px-2 py-0.5 text-[11px] font-semibold text-white shadow">
            En cours
          </span>
        )}
        <CoverImage
          project={project}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">
            {project.period} • {project.role}
          </p>
        </div>
        <div className="flex gap-1">
          {project.tags.slice(0, 2).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-700 line-clamp-2">
  {project.problem}
</p>

{/* Boutons rapides */}
<div className="mt-3 flex gap-2">
  {project.links?.demo && (
    <a
      href={project.links.demo}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
    >
      Démo
    </a>
  )}

  {project.links?.repo && (
    <a
      href={project.links.repo}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
    >
      Code
    </a>
  )}
</div>

    </button>
  );
}




function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              {project.status === "en_cours" && (
                <span className="rounded-full bg-amber-500/90 px-2 py-0.5 text-[11px] font-semibold text-white">
                  En cours
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {project.period} • {project.role} • {project.context}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Fermer
          </button>
        </div>

        <div className="mt-4 grid gap-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl border">
            <CoverImage project={project} className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-2">
            <Detail label="Problème" value={project.problem} />
            <Detail label="Solution" value={project.solution} />
            <Detail label="Impact" value={project.impact} />
          </div>

          <div className="grid gap-2">
            <h3 className="text-base font-semibold">Technologies</h3>
            <TechList tech={project.tech} />
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.links?.repo && (
              <a
                className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            )}
            {project.links?.demo && (
              <a
                className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Démo
              </a>
            )}
            {project.links?.doc && (
              <a
                className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
                href={project.links.doc}
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <span className="text-sm font-semibold">{label} : </span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}

// ---------- App ----------
export default function ProjectBook() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return PROJECTS.filter((p) => {
      const inText = (
        p.title +
        " " +
        p.role +
        " " +
        p.context +
        " " +
        p.problem +
        " " +
        p.solution +
        " " +
        p.tech.join(" ") +
        " " +
        p.tags.join(" ")
      )
        .toLowerCase()
        .includes(q);

      const tagOk = activeTags.length
        ? activeTags.every((t) => p.tags.includes(t))
        : true;

      return inText && tagOk;
    });
  }, [query, activeTags]);

  const toggleTag = (t) => {
    setActiveTags((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-emerald-50 text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Book de Projets — {new Date().getFullYear()}
            </h1>
            <p className="text-sm text-gray-600">
              Étudiante MIAGE & Gestion — Focus gestion de projet, SI & IA
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            Me contacter
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Filters */}
        <section className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Recherche</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un projet, une techno, un tag..."
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tags</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      activeTags.includes(t)
                        ? "bg-gray-900 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
                {activeTags.length > 0 && (
                  <button
                    onClick={() => setActiveTags([])}
                    className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
                  >
                    Réinitialiser
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpen} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border bg-white/70 p-8 text-center">
              <p>Aucun projet ne correspond à la recherche.</p>
            </div>
          )}
        </section>

        {/* About + Contact */}
        <section id="contact" className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/70 p-6">
            <h3 className="text-lg font-semibold">À propos</h3>
            <p className="mt-2 text-sm text-gray-700">
              Étudiante en 3ᵉ année de double licence MIAGE & Gestion, je me
              spécialise en gestion de projet, systèmes d'information et IA
              appliquée. J'aime construire des solutions utiles, simples et
              élégantes.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>
                📧{" "}
                <a
                  className="underline"
                  href="mailto:melissa.benzidane@yahoo.com"
                >
                  melissa.benzidane@yahoo.com
                </a>
              </li>
              <li>
                💼{" "}
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/melissa-benzidane-0a8190268"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/melissa-benzidane-0a8190268
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} — Book de projets. Fait avec ♥️ et React.</p>
      </footer>

      <Modal project={open} onClose={() => setOpen(null)} />
    </div>
  );
}



















