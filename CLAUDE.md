# Working notes for Claude Code

Static site, no build step, no framework. See `README.md` for file structure, routing, and content-editing docs — this file is only for operational gotchas not obvious from the code.

## Local dev
No build step — edits are live immediately. Serve from the project root to test:
```
python3 -m http.server 8935
```

## GitHub Pages sometimes doesn't rebuild
A push can succeed (commit visible on GitHub, raw file content correct) while the live site keeps serving an older build. To check: compare `curl -sI https://jamsarchives.com/ | grep last-modified` against the latest commit time. If it's stale, nudge a rebuild:
```
git commit --allow-empty -m "Trigger GitHub Pages rebuild"
git push
```

## Image paths must be root-absolute
Always `/images/foo.jpg`, never `images/foo.jpg`. The SPA router uses `pushState`, so a relative path resolves against the *current route's* depth (e.g. `/films/<slug>`), not the site root — a relative path that works on `/` will silently 404 on a nested page.

## `website assets/` is gitignored
Raw source material (full-res PSD/PNG exports, the content docx) lives in `website assets/` and is never committed — only the processed, web-sized files in `images/` are. When adding new images: process into `images/` first (resize/compress, e.g. via `sips`), then reference with a root-absolute path.

## Custom domain / CNAME
Hosted at `jamsarchives.com`. The `CNAME` file is sometimes auto-committed/edited by GitHub's own Pages settings UI (e.g. switching between apex and `www`) — if it changes unexpectedly on `git pull`/`fetch`, that's expected; don't revert it without checking with the user first.
