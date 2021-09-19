import './styles/main.scss';
import './styles/preloader.scss';
import './styles/download.scss';
import navigation from './navigation';
import preloader from './preloader';
import { Fluid } from './fluid';
import backBtn from './back-btn';
import FormManager from './FormManager';
import randomFacts from './randomFacts';
import myWorks from './myWorks';
import { isMob } from './utils/isMob';

const mobOrDescHandler = () => {
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

document.addEventListener('DOMContentLoaded', () => {
  mobOrDescHandler();
  preloader();
  Fluid();
  backBtn('#back-btn');
  randomFacts();
  myWorks();
  // eslint-disable-next-line no-new
  new FormManager();
  navigation();
});
