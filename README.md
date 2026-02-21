# Web Components — Docs & Playground

A single-page app with **documentation** and an interactive **playground** for learning and experimenting with vanilla Web Components.

## Quick Start

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
├── index.html          # Entry HTML
├── src/
│   ├── main.js         # App entry
│   ├── main.css        # Global styles
│   ├── app.js          # Shell, navigation, routing
│   ├── docs/           # Documentation
│   │   ├── index.js    # Doc registry
│   │   ├── intro.js
│   │   ├── custom-elements.js
│   │   ├── shadow-dom.js
│   │   ├── templates.js
│   │   ├── lifecycle.js
│   │   └── best-practices.js
│   └── playground/
│       └── sandbox.js  # Live editor (HTML/CSS/JS) + preview
```

## Features

- **Documentation**: Theory and examples for Custom Elements, Shadow DOM, templates, lifecycle, and best practices
- **Live examples**: Editable snippets in each doc section
- **Sandbox**: HTML, CSS, and JS editors with instant iframe preview

## Commands

| Command   | Description          |
|----------|----------------------|
| `npm run dev`    | Start dev server (port 5173) |
| `npm run build`  | Production build to `dist/`   |
| `npm run preview` | Preview production build    |
