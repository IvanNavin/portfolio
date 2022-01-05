import { Router } from './utils/router';
import './main.scss';
import './components/preloader/preloader.scss';
import './pages/about/download.scss';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router({ mode: 'history' });

  router.listen();
});
