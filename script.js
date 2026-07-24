// ─── Film data ────────────────────────────────────────────────
// Single source of truth for the work grid + individual film pages.
// To add a film: add an entry here. `vimeoId: null` renders a
// "trailer coming soon" placeholder until the real ID is dropped in.
const FILMS = [
  {
    slug: "after-the-sky-turned-red",
    title: "After the Sky Turned Red",
    status: "In post-production",
    role: "Director · DP · Sound · Editor",
    color: "#1E2530",
    year: null,
    vimeoId: null,
    synopsis: "Jamie's debut feature documentary follows her mother and surviving classmates at a reunion in Semey, Kazakhstan — a city that bore the human cost of the Soviet Union's nuclear weapons testing program. It is the beginning of a body of work she intends to dedicate to Central Asian stories."
  },
  {
    slug: "after-loss",
    title: "After Loss",
    status: "In post-production",
    role: "Assistant Editor",
    color: "#221A14",
    year: null,
    vimeoId: null,
    synopsis: "A feature documentary by Adrienne von Wolffersdorff. Jamie joins the project as assistant editor."
  },
  {
    slug: "visii",
    title: "Visii",
    status: null,
    role: "Director · DP · Sound · Editor",
    color: "#181C1A",
    year: null,
    vimeoId: null,
    synopsis: "A documentary short shot, directed, and edited independently by Jamie Waltzer."
  },
  {
    slug: "royal-bakehouse",
    title: "Royal Bakehouse",
    status: null,
    role: "Director · DP · Sound · Editor",
    color: "#1C1A22",
    year: null,
    vimeoId: null,
    synopsis: "A documentary short shot, directed, and edited independently by Jamie Waltzer."
  },
  {
    slug: "social-media-content",
    title: "Social Media Content",
    status: null,
    role: "Creator · Editor",
    color: "#383A3E",
    year: null,
    vimeoId: null,
    synopsis: "A collection of social media content created independently by Jamie Waltzer."
  }
];

function filmBySlug(slug) {
  return FILMS.find((f) => f.slug === slug);
}

// ─── Rendering ────────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById("work-grid");
  grid.innerHTML = FILMS.map((f) => `
    <a class="tile" href="/films/${f.slug}" data-link>
      ${f.image
        ? `<img class="tile-img" src="${f.image}" alt="${f.title}" loading="lazy">`
        : `<div class="tile-img" style="background:${f.color};"></div>`}
      <div class="tile-overlay">
        ${f.status ? `<span class="tile-status">${f.status}</span>` : ""}
        <h2 class="tile-title">${f.title}</h2>
        <p class="tile-role">${f.role}</p>
      </div>
    </a>
  `).join("");
}

function renderFilm(slug) {
  const container = document.getElementById("page-film");
  const film = filmBySlug(slug);

  if (!film) {
    container.innerHTML = `
      <div class="film-wrap">
        <a class="film-back" href="/" data-link>&larr; Back to work</a>
        <p class="film-synopsis">Film not found.</p>
      </div>
    `;
    return;
  }

  const embed = film.vimeoId
    ? `<iframe src="https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
    : `<div class="film-embed-placeholder">Trailer coming soon</div>`;

  container.innerHTML = `
    <div class="film-wrap">
      <a class="film-back" href="/" data-link>&larr; Back to work</a>
      <div class="film-header">
        <h1 class="film-title">${film.title}</h1>
        <div class="film-meta">
          ${film.status ? `<span>${film.status}</span>` : ""}
          <span>${film.role}</span>
          ${film.year ? `<span>${film.year}</span>` : ""}
        </div>
      </div>
      <div class="film-embed">${embed}</div>
      <p class="film-synopsis">${film.synopsis}</p>
    </div>
  `;
}

function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("visible"));
  document.getElementById(id).classList.add("visible");
}

function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

// ─── Router ───────────────────────────────────────────────────
function router() {
  const path = location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    renderHome();
    showPage("page-home");
    setActiveNav("work");
    return;
  }

  if (path === "/bio") {
    showPage("page-bio");
    setActiveNav("about");
    return;
  }

  const filmMatch = path.match(/^\/films\/([^/]+)$/);
  if (filmMatch) {
    renderFilm(filmMatch[1]);
    showPage("page-film");
    setActiveNav("work");
    return;
  }

  history.replaceState(null, "", "/");
  renderHome();
  showPage("page-home");
  setActiveNav("work");
}

function navigate(path) {
  if (path === location.pathname) return;
  history.pushState(null, "", path);
  router();
  window.scrollTo(0, 0);
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;
  e.preventDefault();
  navigate(link.getAttribute("href"));
});

window.addEventListener("popstate", router);

// GitHub Pages has no server-side router. 404.html redirects any
// unknown path to /?p=<path>; this restores the real URL before
// the router runs so deep links and page refreshes both work.
(function restoreRedirectedPath() {
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("p");
  if (redirectPath) {
    history.replaceState(null, "", redirectPath);
  }
})();

router();
