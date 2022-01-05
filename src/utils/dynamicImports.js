import { putYouTubeAfterEl } from './putYouTube';
import PORTFOLIO from '../assets/img/portfolio.png';
import POKEDEXHOME from '../assets/img/pokedex-home.png';
import ENGLISH from '../assets/img/English.jpg';
import THANOS from '../assets/img/thanos.jpg';
import EFFECTTHANOS from '../assets/video/effectThanos.mp4';
import GAMEJSPRO from '../assets/video/game_js_pro.mp4';
import { breadCrumbs } from './breadCrumbs';

let isBackBtnLoad = false;

const dynamicImports = (page, locale) => {
  page === '' && (page = 'main-page');
  const accessibilityHeader = document.getElementById('accessibility');
  const regexpHeader = document.getElementById('regexp');
  const examplePokedex = document.getElementById('examplePokedex');
  const pokedexHeader = document.getElementById('pokedex');
  const englishHeader = document.getElementById('english');
  const portfolioHeader = document.getElementById('portfolio');
  const thanosHeader = document.getElementById('thanos');
  const rpgHeader = document.getElementById('rpg');
  const backBtn = document.querySelector('.back-button');
  const backBtnP = document.querySelector('.back-button p');
  let currentCrumbIndex = 0;
  const currentCrumb = breadCrumbs.find((crumb, index) => {
    currentCrumbIndex = index;
    return crumb.page === page;
  });
  const pathIndex = breadCrumbs.findIndex((crumb) => crumb.page === page);
  const { isInit, language } = currentCrumb;
  const langChanged = locale !== language;
  const { local = 'ru' } = window;

  backBtn.dataset.href = currentCrumb.parentPage;
  backBtnP.innerHTML = currentCrumb.parentName[local];

  if (!isBackBtnLoad && page !== 'main-page' && page !== '') {
    import('../components/backButton/back-btn').then((result) => result && result.default('#back-btn'));
    isBackBtnLoad = true;
  }

  if (!isInit || langChanged) {
    switch (page) {
      case '':
      case 'main-page': {
        import('../pages/main/mainText').then((result) => result && result.default());
        break;
      }
      case 'about': {
        import('../pages/about/aboutText').then((result) => result && result.default());
        break;
      }
      case 'my-works': {
        import('../pages/myWorks/myWokrsText').then((result) => result && result.default());
        break;
      }
      case 'contacts': {
        import('../pages/contacts/contactsText').then((result) => result && result.default());
        break;
      }
      case 'performances': {
        import('../pages/performances/performancesText').then((result) => result && result.default());
        break;
      }
      case 'accessibility': {
        import('../pages/reports/accessibility/accessibilityText').then((result) => result && result.default());
        break;
      }
      case 'regexp': {
        import('../pages/reports/regexp/regexpText').then((result) => result && result.default());
        break;
      }
      case 'pokedex': {
        import('../pages/works/pokedex/pokedexText').then((result) => result && result.default());
        break;
      }
      case 'portfolio': {
        import('../pages/works/portfolio/portfolioText').then((result) => result && result.default());
        break;
      }
      case 'english-learn': {
        import('../pages/works/english/englishLearnText').then((result) => result && result.default());
        break;
      }
      case 'thanos-effect': {
        import('../pages/works/thanos/thanosEffectText').then((result) => result && result.default());
        break;
      }
      case 'RPG': {
        import('../pages/works/RPG/RPGText').then((result) => result && result.default());
        break;
      }
      default:
        break;
    }
    breadCrumbs[currentCrumbIndex].language = locale;
    document.querySelector('html').setAttribute('lang', locale);
  }

  if (!isInit) {
    switch (page) {
      case '':
      case 'main-page': {
        import('./fluid').then((result) => result && result.default());
        import('../pages/main/mainPage').then((result) => result && result.default());
        break;
      }
      case 'about': {
        break;
      }
      case 'my-works': {
        import('../pages/myWorks/myWorks').then((result) => result && result.default());
        break;
      }
      case 'contacts': {
        import('../pages/contacts/FormManager').then(({ default: FormManager }) => FormManager && new FormManager());
        break;
      }
      case 'accessibility': {
        putYouTubeAfterEl(accessibilityHeader, 'https://www.youtube.com/embed/c1W9u6SN2Cw');
        break;
      }
      case 'regexp': {
        putYouTubeAfterEl(regexpHeader, 'https://www.youtube.com/embed/ZJw-nqtDrWc');
        break;
      }
      case 'pokedex': {
        pokedexHeader.insertAdjacentHTML('afterend', `<img src="${POKEDEXHOME}" alt="Pokedex site img"/>`);
        putYouTubeAfterEl(examplePokedex, 'https://www.youtube.com/embed/3QXCrih6_MI');
        break;
      }
      case 'portfolio': {
        portfolioHeader.insertAdjacentHTML('afterend', `<img src="${PORTFOLIO}" alt="Portfolio site img"/>`);
        break;
      }
      case 'english-learn': {
        englishHeader.insertAdjacentHTML('afterend', `<img src="${ENGLISH}" alt="English site img"/>`);
        break;
      }
      case 'thanos-effect': {
        thanosHeader.insertAdjacentHTML(
          'afterend',
          `<video loop='' autoplay='' muted='' poster='${THANOS}'>
                  <source src="${EFFECTTHANOS}" />
                </video>`,
        );
        break;
      }
      case 'RPG': {
        rpgHeader.insertAdjacentHTML(
          'afterend',
          `<video loop='' autoplay='' muted='' poster=''>
                    <source src="${GAMEJSPRO}" />
                </video>`,
        );
        break;
      }
      default:
        break;
    }

    breadCrumbs[pathIndex].isInit = true;
  }
};

export default dynamicImports;
