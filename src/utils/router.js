import dynamicImports from './dynamicImports';
import { langButton } from '../components/langButton/langButton';
import { getCookie, setCookie } from './cookie';

export class Router {
  routes = [];

  constructor(options) {
    this.navigationWrapper = document.querySelector('[data-nav-wrapper]');
    this.mode = window.history.pushState ? 'history' : 'hash';
    if (options.mode) this.mode = options.mode;
    this.current = this.getFragment();
    this.defaultLocale = 'ru';
    this.locale = getCookie('locale') || this.defaultLocale;
    this.root = `/`;
    this.navigate();
    this.setLocale(this.locale);
  }

  add = (path, cb) => {
    this.routes.push({ path, cb });
    return this;
  };

  remove = (path) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  socialLinks = (path) => {
    if (path === 'contacts') {
      const socialWrapper = document.querySelector('.social-links');
      if (socialWrapper.classList.contains('animate')) {
        socialWrapper.classList.remove('animate');
      }
      setTimeout(() => {
        socialWrapper.classList.add('animate');
      }, 1000);
    }
  };

  setLocale = (locale) => {
    window.local = locale;
    setCookie('locale', locale);
  };

  getLocale = () => window.local || this.defaultLocale;

  clearSlashes = (path) => path.toString().replace(/\/$/, '').replace(/^\//, '');

  getFragment = () => {
    if (this.mode === 'history') {
      // fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      // fragment = fragment.replace(/\?(.*)$/, '');
      // fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
      return this.clearSlashes(window.location.pathname);
    } else {
      const match = window.location.href.match(/#(.*)$/);
      return this.clearSlashes(match ? match[1] : '');
    }
  };

  navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, null, this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
    return this;
  };

  updateLinks = () => {
    const links = document.querySelectorAll('[data-href]');

    const linkHandler = (e) => {
      e.preventDefault();
      const fadeInElement = document.querySelector('.fadein');
      const fadeOutElement = document.querySelector('.fadeout');
      const prevLinkName = this.navigationWrapper.dataset.navWrapper;
      const linkName = e.currentTarget.dataset.href;
      const prevSection = document.querySelector(`.${prevLinkName}`);
      const nextSection = document.querySelector(`.${linkName}`);

      fadeInElement && fadeInElement.classList.remove('fadein');
      fadeOutElement && fadeOutElement.classList.remove('fadeout');
      prevSection.classList.add('fadeout');

      setTimeout(() => {
        this.navigationWrapper.dataset.navWrapper = linkName;
        this.navigate(linkName);
        nextSection.classList.add('fadein');
      }, 400);
    };

    links.forEach((link) => link.addEventListener('click', linkHandler));
  };

  fadeNavigate = () => {
    const route = this.getFragment() || 'main-page';
    const fadeInElement = document.querySelector('.fadein');
    const fadeOutElement = document.querySelector('.fadeout');

    if (route !== this.navigationWrapper.dataset.navWrapper) {
      this.navigationWrapper.dataset.navWrapper = route;
      fadeInElement && fadeInElement.classList.remove('fadein');
      fadeOutElement && fadeOutElement.classList.remove('fadeout');
    }
  };

  listen = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.interval, 50);
  };

  pagesHandler = () => {
    this.fadeNavigate();
    dynamicImports(this.getFragment(), this.getLocale());
    langButton(this.setLocale);
    this.socialLinks(this.current);
    setTimeout(() => {
      this.updateLinks();
    }, 1000);
  };

  interval = () => {
    if (this.current !== this.getFragment() || this.locale !== this.getLocale()) {
      this.locale = this.getLocale();
      this.current = this.getFragment();
      this.pagesHandler();

      this.routes.some((route) => {
        const match = this.current.match(route.path);
        if (match) {
          match.shift();
          route.cb.apply({}, match);
          return match;
        }
        return false;
      });
    }
  };

  init = () => {
    this.pagesHandler();

    this.listen();
  };
}
