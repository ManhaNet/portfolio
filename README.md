# Md. Momtazur Rashid Portfolio

Production-ready static portfolio website for Md. Momtazur Rashid, built with HTML5, CSS3, and vanilla JavaScript.

## Source of Truth

The website content preserves the factual information from the resume/source profile. The downloadable resume is the official PDF file:

`assets/resume/Md_Momtazur_Rashid_Resume.pdf`

## Features

- Premium dark glassmorphism interface
- Recruiter-focused hero section
- Animated typing effect
- Professional circular profile photo presentation
- Experience timeline cards
- Grouped skills with animated meters
- Project cards with technologies and business impact
- Premium certification cards
- Contact section with email, phone, location, LinkedIn status, GitHub status, relocation, and visa-sponsorship availability
- Semantic HTML and accessibility-focused structure
- Keyboard-friendly mobile navigation
- Open Graph, Twitter Card, canonical URL, robots.txt, sitemap.xml, and JSON-LD schema
- Optimized WebP/JPEG profile images
- Cloudflare Pages and GitHub Pages compatible

## Project Structure

```text
portfolio/
|-- index.html
|-- style.css
|-- script.js
|-- robots.txt
|-- sitemap.xml
|-- README.md
`-- assets/
    |-- images/
    |-- icons/
    `-- resume/
```

## Local Preview

Open `index.html` directly in a browser, or serve the folder with a static server:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080/
```

## Cloudflare Pages Deployment

1. Push the project files to a GitHub repository.
2. Create a new Cloudflare Pages project from the repository.
3. Use these settings:
   - Framework preset: None
   - Build command: leave empty
   - Build output directory: `/`
4. Deploy.

If the repository contains this `portfolio` folder inside a larger repository, set the Cloudflare project root to `portfolio`.

## GitHub Pages Deployment

1. Push the contents of this folder to a repository.
2. Open repository Settings.
3. Go to Pages.
4. Select the branch and root folder.
5. Save and wait for GitHub Pages to publish.

## SEO Domain

The current production URL used in metadata is:

`https://portfolio.s-manha-mm.workers.dev/`

If a different final domain is used, update:

- `index.html`
- `robots.txt`
- `sitemap.xml`

## License

All profile and resume content belongs to Md. Momtazur Rashid.
Last updated: July 2026
