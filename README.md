# By MAM Studios Portfolio

A static, premium portfolio site for By MAM Studios, built with HTML, CSS, and vanilla JavaScript.

## Run locally

From the repo root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Update content

All dynamic content lives in `./assets/data/site.json`. Edit this file to update featured work, projects, extras, and media content.

## Deployment (GitHub Pages)

- Ensure all asset references use relative paths (already configured).
- Push to GitHub and enable Pages on the main branch.

## Structure

- `index.html`: Home page
- `work/index.html`: Portfolio list with filters
- `work/project.html`: Project detail template (loads by `?slug=`)
- `assets/css/styles.css`: Global styles
- `assets/js/*.js`: Interactive behavior + rendering
- `assets/data/site.json`: Content source

