# Jamie Waltzer — Portfolio Site

No frameworks, no dependencies, no build step. Plain HTML/CSS/JS, client-side routed.

---

## Files

```
index.html   — app shell: nav + three mount points (home / film / bio)
style.css    — all styling
script.js    — film data, router, and page rendering
404.html     — GitHub Pages deep-link fallback (see below)
```

---

## How routing works

There's one real HTML page (`index.html`). `script.js` holds a `FILMS` array
(title, role, status, color placeholder, Vimeo ID, synopsis) and renders three
views into it based on the URL, using the History API (`pushState`) — no `#`
in the URLs:

- `/` — home grid, one tile per entry in `FILMS`
- `/films/<slug>` — that film's detail page (embedded trailer + synopsis)
- `/bio` — the About page (static content in `index.html`)

**To add a new film:** add one object to the `FILMS` array in `script.js`. No
new HTML file needed.

**GitHub Pages caveat:** GitHub Pages only knows about real files, so a direct
visit or refresh on `/films/visii` would normally 404. `404.html` catches
that, redirects to `/?p=/films/visii`, and `script.js` restores the real URL
via `history.replaceState` before the router runs. This whole scheme assumes
the site is hosted at the **root** of a domain (e.g. `jamiewaltzer.github.io`
or a custom domain) — if it's ever hosted as a GitHub *project* page instead
(`username.github.io/reponame/`), the absolute `/` paths in `script.js` and
`404.html` will break and need a base-path prefix.

---

## How to host (free options)

### GitHub Pages (recommended)
1. Create a free account at github.com
2. Create a new repository named `jamiewaltzer.github.io` (or any name — but see the root-vs-project-page caveat above)
3. Upload these four files
4. Go to Settings → Pages → Source: main branch
5. Your site is live at `jamiewaltzer.github.io`
6. To use a custom domain (e.g. jamiewaltzer.com), buy it on Namecheap or Cloudflare, then follow GitHub's custom domain instructions

### Netlify (drag and drop)
1. Go to netlify.com, create a free account
2. Drag the entire folder onto the Netlify dashboard
3. Live instantly — gives you a `.netlify.app` URL
4. Add a custom domain in site settings

---

## Swapping in real images

Tiles are generated from the `FILMS` array in `script.js` — there's no
per-tile markup in `index.html` to edit anymore. Each film currently renders
a flat color placeholder (`color: "#1E2530"`, etc.) via `renderHome()` in
`script.js`.

1. Create an `images/` folder next to these files
2. Drop in your stills (JPG or WebP, ideally 1920×1080 or 16:9 crop)
3. Add an `image` field to the relevant `FILMS` entry, e.g. `image: "images/after-the-sky.jpg"`
4. In `renderHome()`, swap the `<div class="tile-img" style="background:${f.color};">` line for an `<img class="tile-img" src="${f.image}" alt="${f.title}">` when `f.image` is set

---

## Swapping in real trailers (Vimeo)

Each `FILMS` entry has a `vimeoId` field, currently `null` for all four
films — this renders a "Trailer coming soon" placeholder on the film page.

1. Upload the trailer to Vimeo and grab its numeric ID from the video URL (`vimeo.com/<id>`)
2. Set `vimeoId: "<id>"` on that film's entry in `script.js`
3. `renderFilm()` will automatically embed it via Vimeo's player iframe — no other changes needed

---

## Swapping in the real font (Nitti Grotesk)

The site currently uses Jost (Google Fonts) as a stand-in for Nitti Grotesk.

If you have Adobe Fonts access:
1. Activate Nitti Grotesk in Adobe Fonts
2. Copy the `<link>` embed code Adobe gives you
3. In `index.html`, replace the Google Fonts `<link>` with Adobe's
4. In `style.css`, change `--font: 'Jost', ...` to `--font: 'nitti-grotesk', ...`

---

## Things to update before launch

In `index.html`:
- Replace `your@email.com` with your real email
- Add your reel link if/when you have one
- Add Instagram or Vimeo link if you want it in the about grid

In `script.js`:
- Fill in real `synopsis` text for each film in `FILMS` (currently placeholder copy)
- Set `vimeoId` once trailers are cut (see above)
- Set `year` if you want it shown in the film-page meta row

In `style.css`:
- Nothing required, but you can tweak `--bg` and `--text` colors if you want a different palette
