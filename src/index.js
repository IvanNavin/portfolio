import { Router } from './utils/router';
import './main.scss';
import './components/preloader/preloader.scss';
import './pages/about/download.scss';
import { text } from './utils/text';

// 5094623202:AAENP1keUX-FJe7Dp5lAcpPOCu3ze1hsIGU
// -777552229

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router({ mode: 'history' });

  router.listen();
  text();
});
