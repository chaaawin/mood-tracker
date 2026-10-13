# Class Notebook

## Week 1 — Mood Garden

**Date:** October 13, 2026

### What I made

I created Mood Garden, a simple web app for recording a daily mood and an optional short note. The app shows previous check-ins and keeps them in the same browser after the page is refreshed.

### My process

I began by interpreting the assignment requirements: create a small personal product, publish it online, keep the source code in GitHub, and document the process. I chose a mood tracker because it has a clear purpose and could be completed as a focused first project.

I used an AI coding assistant to help plan the feature set, create the HTML structure, design the responsive interface, and write the JavaScript. I kept the project buildless so it would be easy to understand and deploy with GitHub Pages. After the first implementation, I checked the saving, validation, browser storage, and deletion behavior.

### What worked

The app allows a user to select one of five moods, optionally write a note, and save the check-in. Saved entries appear immediately in a history list and remain after refreshing the browser. The layout also adapts to smaller screens.

### Challenges

The main challenge was keeping the app simple while making it feel complete. Browser storage was a useful solution because it lets the app remember entries without requiring a database or user account. I also needed to make sure that notes were added to the page safely and that the form gave useful feedback when no mood was selected.

### What I learned

I learned how HTML provides structure, CSS controls the visual design, and JavaScript handles user interaction and stored data. I also learned that deployment is a separate step from writing the code: the repository contains the source, while GitHub Pages provides the public website.

### How I used AI

AI helped me translate the assignment into a small product plan, generate an initial implementation, and identify details such as accessibility, validation, and responsive design. I reviewed the suggested result and kept the scope focused on the assignment requirements.

### Next steps

In a future version, I would add a weekly mood summary, filtering by date, and an option to export entries while continuing to keep the data private.
