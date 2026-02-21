import { docs } from './docs/index.js';
import { Playground } from './playground/sandbox.js';

export class App {
  constructor(container) {
    this.container = container;
    this.currentView = null;
    this.currentDocId = null;
  }

  mount() {
    this.render();
    this.setupNavigation();
    this.setupInitialRoute();
  }

  setupInitialRoute() {
    const hash = window.location.hash.slice(1);
    if (hash === 'playground') {
      this.showPlayground();
    } else if (hash) {
      this.showDoc(hash);
    } else if (docs.length > 0) {
      this.showDoc(docs[0].id);
    }
  }

  setupNavigation() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'playground') {
        this.showPlayground();
      } else if (hash) {
        this.showDoc(hash);
      }
    });
  }

  showDoc(id) {
    const doc = docs.find((d) => d.id === id);
    if (!doc) return;

    this.currentDocId = id;
    this.currentView = 'doc';

    const main = this.container.querySelector('.app-main');
    if (main) {
      main.classList.remove('app-main--playground');
      main.innerHTML = doc.render();
      main.scrollTop = 0;
      doc.afterRender?.();
    }

    this.updateNavState();
  }

  showPlayground() {
    this.currentView = 'playground';
    this.currentDocId = null;

    const main = this.container.querySelector('.app-main');
    if (main) {
      main.classList.add('app-main--playground');
      const playground = new Playground();
      main.innerHTML = playground.render();
      playground.mount(main);
    }

    this.updateNavState();
  }

  updateNavState() {
    this.container.querySelectorAll('.nav-link').forEach((link) => {
      const href = link.getAttribute('href')?.slice(1) || '';
      link.classList.toggle('active', href === this.currentDocId || (href === 'playground' && this.currentView === 'playground'));
    });
  }

  render() {
    const navItems = docs
      .map(
        (d) =>
          `<a class="nav-link" href="#${d.id}">${d.title}</a>`
      )
      .join('');

    this.container.innerHTML = `
      <div class="app-shell">
        <header class="app-header">
          <h1>Web Components</h1>
        </header>
        <aside class="app-sidebar">
          <nav>
            <div class="nav-section">Documentation</div>
            ${navItems}
            <div class="nav-section" style="margin-top: 1rem;">Playground</div>
            <a class="nav-link" href="#playground">Sandbox</a>
          </nav>
        </aside>
        <main class="app-main">
          <div class="placeholder">
            <h2>Welcome</h2>
            <p>Select a topic from the sidebar or open the Playground to start.</p>
          </div>
        </main>
      </div>
    `;
  }
}
