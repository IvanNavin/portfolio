import { isMob } from './isMob';

export const mobOrDescHandler = () => {
  const mainPage = document.querySelector('.main-page');
  const resizeHandler = () => {
    if (isMob()) {
      document.body.classList.add('mobile-platform');
    } else {
      document.body.classList.remove('mobile-platform');
      mainPage.classList.remove('tapped');
    }
  };

  resizeHandler();
  window.addEventListener('resize', resizeHandler);
};
