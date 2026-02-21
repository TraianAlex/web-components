import './main.css';
import { App } from './app.js';

const app = document.getElementById('app');
const appInstance = new App(app);
appInstance.mount();
