import { isMob } from './isMob';

export const mobOrDescHandler = () => {
  const mainPage = document.querySelector('.main-page');
  const toggleTap = () => {
    this.classList.toggle('tapped');
  };
  const resizeHandler = () => {
    if (isMob()) {
      document.body.classList.add('mobile-platform');
      mainPage.addEventListener('click', toggleTap);
    } else {
      document.body.classList.remove('mobile-platform');
      mainPage.classList.remove('tapped');
      mainPage.removeEventListener('click', toggleTap);
    }
  };

  resizeHandler();
  window.addEventListener('resize', resizeHandler);
};
