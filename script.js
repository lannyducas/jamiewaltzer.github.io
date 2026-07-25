// ─── Film data ────────────────────────────────────────────────
// Single source of truth for the work grid + individual film pages.
// To add a film: add an entry here. `vimeoId`/`youtubeId: null` renders
// a "trailer coming soon" placeholder until the real ID is dropped in.
const FILMS = [
  {
    slug: "after-the-sky-turned-red",
    title: "After the Sky Turned Red",
    status: "In post-production",
    role: "Director · DP · Sound · Editor",
    color: "#1E2530",
    image: "/images/after-the-sky-turned-red.jpg",
    // Extra stills shown next to the trailer on the film page (optional
    // on any FILMS entry — only rendered when present).
    gallery: [
      { src: "/images/after-the-sky-turned-red-2.jpg", alt: "Reunion dinner" },
      { src: "/images/after-the-sky-turned-red-3.jpg", alt: "Evening light over the water" },
      { src: "/images/after-the-sky-turned-red-4.jpg", alt: "Train corridor at night" }
    ],
    year: null,
    vimeoId: "1210428564",
    youtubeId: null,
    synopsis: "<em>After the Sky Turned Red</em> is Jamie's debut feature documentary. It follows her mother and surviving classmates at a reunion in Semey, Kazakhstan — a city that bore the human cost of the Soviet Union's nuclear weapons testing program. 456 nuclear devices were detonated between 1949 and 1989, with Kazakhstan officially recognizing more than 1.5 million citizens as victims of radiation. It is the beginning of a body of work she intends to dedicate to Central Asian stories."
  },
  {
    slug: "after-loss",
    title: "After Loss",
    status: "In post-production",
    role: "Assistant Editor",
    color: "#221A14",
    image: "/images/after-loss.jpg",
    year: null,
    vimeoId: null,
    youtubeId: null,
    synopsis: "<em>After Loss</em> is a feature-length documentary by director Adrienne von Wolffersdorff that centers the often-silent experiences of those who have lived through miscarriage. Up to 25% of clinically recognized pregnancies end in miscarriage — yet grief, medical care, and the emotional weight of that loss remain largely unspoken. The film weaves together personal testimonies to spark a much-needed conversation around an experience shared by so many. Jamie is joining the project as assistant editor."
  },
  {
    slug: "visii",
    title: "Visii",
    status: null,
    role: "Director · DP · Sound · Editor",
    color: "#181C1A",
    image: "/images/visii.jpg",
    year: null,
    vimeoId: null,
    youtubeId: "YtPuG-VuKbA",
    synopsis: "Meet Veronika, co-owner of <em>Visii</em> — a vintage and designer clothing store in Portland, Oregon. Originally from Russia, Veronika started selling clothes on Depop as a teenager and has since built one of Portland's most personal and carefully sourced vintage stores from the ground up. The vintage market has exploded in recent years, but a lot of what goes on behind the scenes — how pieces are sourced, what international buying trips look like, how to develop a real eye for quality — stays pretty gatekept. In this short documentary, Veronika opens up about all of it. Shot and edited by Jamie."
  },
  {
    slug: "royal-bakehouse",
    title: "Royal Bakehouse",
    status: null,
    role: "Director · DP · Sound · Editor",
    color: "#1C1A22",
    image: "/images/royal-bakehouse.jpg",
    year: null,
    vimeoId: null,
    youtubeId: "e2_UPe7K8iE",
    synopsis: "Meet Mina, the owner of <em>Royal Bakehouse</em> in Bellevue, Washington — a French bakery she opened at the end of 2020, in the middle of a pandemic. Originally from Iran, Mina's path to pastry took her from Tehran to Toronto to now the Pacific Northwest, where she eventually chose to build her dream. In this short documentary, we follow Mina through her morning routine and hear her story: how she fell in love with baking, what it takes to run a small business, and why she keeps showing up before sunrise every day. Shot and edited by Jamie."
  },
  {
    slug: "social-media-content",
    title: "Social Media Content",
    status: null,
    role: "Creator · Editor",
    color: "#383A3E",
    image: "/images/social-media-content.jpg",
    year: null,
    synopsis: "A collection of short-form and social work — an experimental short film, and an ongoing series made in partnership with the wearable camera brand Computer Angel.",
    // Collection films render a sub-grid instead of a single embed —
    // each item gets its own page at /films/social-media-content/<slug>.
    collection: [
      {
        slug: "i-woke-up-with-a-desire-to-see-and-not-be-seen",
        title: "i woke up with a desire to see and not be seen",
        role: "DP · Editor",
        color: "#20242B",
        image: "/images/i-woke-up-4.jpg",
        youtubeId: "Sp630_JbHJA",
        synopsis: "A short experimental film about dreams, surveillance, and dread. Shot and edited by Jamie.",
        gallery: [
          { src: "/images/i-woke-up-1.jpg", alt: "Film still" },
          { src: "/images/i-woke-up-2.jpg", alt: "Film still" },
          { src: "/images/i-woke-up-3.jpg", alt: "Film still" },
          { src: "/images/i-woke-up-4.jpg", alt: "Film still" },
          { src: "/images/i-woke-up-5.jpg", alt: "Film still" }
        ]
      },
      {
        slug: "computer-angel",
        title: "Computer Angel",
        role: "DP · Editor · Promotion",
        color: "#2B2320",
        image: "/images/computer-angel.jpg",
        synopsis: "An ongoing content series made in partnership with Computer Angel, a wearable camera brand, shot entirely on the device. The work is intimate and introspective — tracing the inner life of a young woman navigating indecision, desire, and the private texture of everyday moments. Content posted across Reels and Carousels has collectively reached over 380,000 views and 30K likes. Shot, edited, and promoted by Jamie.",
        // Named sub-galleries, each paired with its own Instagram link(s) below.
        galleries: [
          {
            heading: "Decisions",
            images: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ src: `/images/computer-angel-decisions-${n}.jpg`, alt: "Decisions — still" }))
          },
          {
            heading: "Fig",
            images: [1, 2, 3, 4, 5, 6].map((n) => ({ src: `/images/computer-angel-fig-${n}.jpg`, alt: "Fig — still" }))
          }
        ],
        links: [
          { label: "Decisions — Carousel", url: "https://www.instagram.com/p/DXwy58okyTV/?img_index=1" },
          { label: "Decisions — Reel", url: "https://www.instagram.com/p/DX2UStzToQI/" },
          { label: "Fig — Carousel", url: "https://www.instagram.com/p/DX8_7b3ERQ3/?img_index=1" }
        ]
      }
    ]
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

function embedFor(entry) {
  if (entry.vimeoId) {
    return `<iframe src="https://player.vimeo.com/video/${entry.vimeoId}?title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  }
  if (entry.youtubeId) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${entry.youtubeId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  }
  return null;
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

  if (film.collection) {
    renderCollection(container, film);
    return;
  }

  const embed = embedFor(film) || `<div class="film-embed-placeholder">Trailer coming soon</div>`;

  const gallery = film.gallery ? `
    <div class="film-gallery">
      ${film.gallery.map((g) => `<img class="film-gallery-img" src="${g.src}" alt="${g.alt || film.title}" loading="lazy">`).join("")}
    </div>
  ` : "";

  container.innerHTML = `
    <div class="film-wrap${film.gallery ? " film-wrap--wide" : ""}">
      <a class="film-back" href="/" data-link>&larr; Back to work</a>
      <div class="film-header">
        <h1 class="film-title">${film.title}</h1>
        <div class="film-meta">
          ${film.status ? `<span>${film.status}</span>` : ""}
          <span>${film.role}</span>
          ${film.year ? `<span>${film.year}</span>` : ""}
        </div>
      </div>
      <div class="film-media">
        <div class="film-embed">${embed}</div>
        ${gallery}
      </div>
      <p class="film-synopsis">${film.synopsis}</p>
    </div>
  `;
}

function renderCollection(container, film) {
  container.innerHTML = `
    <div class="film-wrap">
      <a class="film-back" href="/" data-link>&larr; Back to work</a>
      <div class="film-header">
        <h1 class="film-title">${film.title}</h1>
        <div class="film-meta">
          <span>${film.role}</span>
        </div>
      </div>
      <p class="film-synopsis">${film.synopsis}</p>
      <div class="collection-grid">
        ${film.collection.map((item) => `
          <a class="tile" href="/films/${film.slug}/${item.slug}" data-link>
            ${item.image
              ? `<img class="tile-img" src="${item.image}" alt="${item.title}" loading="lazy">`
              : `<div class="tile-img" style="background:${item.color};"></div>`}
            <div class="tile-overlay">
              <h2 class="tile-title">${item.title}</h2>
              <p class="tile-role">${item.role}</p>
            </div>
          </a>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCollectionItem(parentSlug, itemSlug) {
  const container = document.getElementById("page-film");
  const film = filmBySlug(parentSlug);
  const item = film && film.collection && film.collection.find((i) => i.slug === itemSlug);

  if (!film || !item) {
    container.innerHTML = `
      <div class="film-wrap">
        <a class="film-back" href="/" data-link>&larr; Back to work</a>
        <p class="film-synopsis">Not found.</p>
      </div>
    `;
    return;
  }

  const embed = embedFor(item);

  const media = embed ? `
    <div class="film-media">
      <div class="film-embed">${embed}</div>
      ${item.gallery ? `
        <div class="film-gallery">
          ${item.gallery.map((g) => `<img class="film-gallery-img" src="${g.src}" alt="${g.alt || item.title}" loading="lazy">`).join("")}
        </div>
      ` : ""}
    </div>
  ` : "";

  // Named photo grids (e.g. Computer Angel's "Decisions" / "Fig" sets) —
  // desaturated by default, full color on hover.
  const galleries = item.galleries ? item.galleries.map((section) => `
    <div class="gallery-section">
      <h2 class="gallery-heading">${section.heading}</h2>
      <div class="photo-grid">
        ${section.images.map((g) => `<img src="${g.src}" alt="${g.alt || section.heading}" loading="lazy">`).join("")}
      </div>
    </div>
  `).join("") : "";

  container.innerHTML = `
    <div class="film-wrap${item.gallery && embed ? " film-wrap--wide" : ""}">
      <a class="film-back" href="/films/${film.slug}" data-link>&larr; Back to ${film.title}</a>
      <div class="film-header">
        <h1 class="film-title">${item.title}</h1>
        <div class="film-meta">
          <span>${item.role}</span>
        </div>
      </div>
      ${media}
      <p class="film-synopsis">${item.synopsis}</p>
      ${galleries}
      ${item.links ? `
        <ul class="link-list">
          ${item.links.map((l) => `
            <li><a class="link-list-item" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} &rarr;</a></li>
          `).join("")}
        </ul>
      ` : ""}
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

  const collectionItemMatch = path.match(/^\/films\/([^/]+)\/([^/]+)$/);
  if (collectionItemMatch) {
    renderCollectionItem(collectionItemMatch[1], collectionItemMatch[2]);
    showPage("page-film");
    setActiveNav("work");
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
