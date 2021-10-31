// eslint-disable-next-line import/named
import { Router } from '../../utils/router';

const updateIframes = () => document.querySelectorAll('iframe').forEach((iframe) => (iframe.src = iframe.src));

const socialLinks = () => {
  const hash = window.location.hash.split('#')[1] || 'main-page';

  if (hash === 'contacts') {
    const socialWrapper = document.querySelector('.social-links');
    if (socialWrapper.classList.contains('animate')) {
      socialWrapper.classList.remove('animate');
    }
    setTimeout(() => {
      socialWrapper.classList.add('animate');
    }, 1000);
  }
};

const navigation = () => {
  const navigationWrapper = document.querySelector('[data-nav-wrapper]');
  const router = new Router({ mode: 'hash', root: '/' });
  const path = router.getFragment() ? router.getFragment() : 'main-page';

  if (navigationWrapper.dataset.navWrapper === '') {
    navigationWrapper.dataset.navWrapper = 'main-page';
  }

  const links = document.querySelectorAll('[data-href]');

  function linkHandler(e) {
    e.preventDefault();
    const fadeInElement = document.querySelector('.fadein');
    const fadeOutElement = document.querySelector('.fadeout');
    const prevLinkName = navigationWrapper.dataset.navWrapper;
    const linkName = this.dataset.href;
    const prevSection = document.querySelector(`.${prevLinkName}`);
    const nextSection = document.querySelector(`.${linkName}`);

    fadeInElement && fadeInElement.classList.remove('fadein');
    fadeOutElement && fadeOutElement.classList.remove('fadeout');
    prevSection.classList.add('fadeout');

    setTimeout(() => {
      navigationWrapper.dataset.navWrapper = linkName;
      router.navigate(linkName);
      nextSection.classList.add('fadein');
    }, 400);
  }

  links.forEach((link) => link.addEventListener('click', linkHandler));

  window.addEventListener('load', () => {
    navigationWrapper.dataset.navWrapper = path;
    router.add(path, () => {
      navigationWrapper.dataset.navWrapper = path;
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.split('#')[1] || 'main-page';
    const fadeInElement = document.querySelector('.fadein');
    const fadeOutElement = document.querySelector('.fadeout');

    if (hash !== navigationWrapper.dataset.navWrapper) {
      navigationWrapper.dataset.navWrapper = hash;
      fadeInElement && fadeInElement.classList.remove('fadein');
      fadeOutElement && fadeOutElement.classList.remove('fadeout');
    }

    socialLinks();
    updateIframes();
  });
};

export default navigation;
