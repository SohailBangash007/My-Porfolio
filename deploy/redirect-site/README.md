# Exact-name redirect site

This folder is **not** part of the portfolio build. It is a tiny standalone site whose only job is to send visitors from the exact-name URL to the real portfolio.

## Live

```
https://muhammad-sohail-portfolio009.netlify.app
```

301-redirects to the main portfolio:

```
https://muhammad-sohail-portfolio-009.netlify.app
```

The main site and its original link are never renamed or modified.

## Why a second site

`.netlify.app` names are unique per Netlify site, so the only way to also make the exact-name URL work — without touching the existing link — is a second Netlify site with that exact name. This folder is that site.

## Redeploy (only if needed)

From this folder:

```bash
netlify deploy --dir=. --prod --no-build --site fc1b72b2-47f5-4c24-8c32-7d2f5bdd8c07
```

`_redirects` contains the 301 rule. `index.html` is a fallback for visitors whose browser does not follow the redirect immediately.
