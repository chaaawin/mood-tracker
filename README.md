# Mood Garden

Mood Garden is a small, private mood journal created for the Week 1 Personal Product assignment. It lets users choose how they feel, add an optional note, and look back at recent check-ins.

**Live app:** <https://chaaawin.github.io/mood-tracker/>

## Features

- Five mood choices with an optional written reflection
- Recent check-in history
- Browser storage, so entries remain after refreshing
- Responsive layout for phones and computers
- Keyboard-accessible controls and clear form feedback

## Run locally

No installation or build step is required. Open `index.html` directly, or start a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Privacy

Mood entries are stored only in the current browser using `localStorage`. The app has no account, database, tracking, or analytics.

## Deployment

This project is designed for GitHub Pages. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/ (root)` folder, then save.

## Built with

HTML, CSS, and vanilla JavaScript, with AI assistance during planning, implementation, and review.
