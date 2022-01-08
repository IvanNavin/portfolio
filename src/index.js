import { Router } from './utils/router';
import './main.scss';
import './components/preloader/preloader.scss';
import './pages/about/download.scss';
import { text } from './utils/text';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router({ mode: 'history' });

  text();
  router.listen();
});
