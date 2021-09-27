import { putYouTubeAfterEl } from './utils/putYouTube';
import PORTFOLIO from './img/portfolio.png';
import POKEDEXHOME from './img/pokedex-home.png';
import ENGLISH from './img/English.jpg';
import THANOS from './img/thanos.jpg';
import EFFECTTHANOS from './video/effectThanos.mp4';
import GAMEJSPRO from './video/game_js_pro.mp4';

export const breadCrumbs = [
  {
    page: 'main-page',
    isInit: false,
    parentPage: 'main-page',
    parentName: 'Иван',
  },
  {
    page: 'about',
    isInit: false,
    parentPage: 'main-page',
    parentName: 'Иван',
  },
  {
    page: 'my-works',
    isInit: false,
    parentPage: 'main-page',
    parentName: 'Иван',
  },
  {
    page: 'pokedex',
    isInit: false,
    parentPage: 'my-works',
    parentName: 'Мои работы',
  },
  {
    page: 'contacts',
    isInit: false,
    parentPage: 'main-page',
    parentName: 'Иван',
  },
  {
    page: 'portfolio',
    isInit: false,
    parentPage: 'my-works',
    parentName: 'Мои работы',
  },
  {
    page: 'RPG',
    isInit: false,
    parentPage: 'my-works',
    parentName: 'Мои работы',
  },
  {
    page: 'thanos-effect',
    isInit: false,
    parentPage: 'my-works',
    parentName: 'Мои работы',
  },
  {
    page: 'english-learn',
    isInit: false,
    parentPage: 'my-works',
    parentName: 'Мои работы',
  },
  {
    page: 'performances',
    isInit: false,
    parentPage: 'main-page',
    parentName: 'Иван',
  },
  {
    page: 'regexp',
    isInit: false,
    parentPage: 'performances',
    parentName: 'Доклады',
  },
  {
    page: 'accessibility',
    isInit: false,
    parentPage: 'performances',
    parentName: 'Доклады',
  },
];

let isBackBtnLoad = false;

const dynamicImports = (page) => {
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
  const currentCrumb = breadCrumbs.find((crumb) => crumb.page === page);
  const pathIndex = breadCrumbs.findIndex((crumb) => crumb.page === page);
  const { isInit } = currentCrumb;

  backBtn.dataset.href = currentCrumb.parentPage;
  backBtnP.innerText = currentCrumb.parentName;

  if (!isBackBtnLoad && page !== 'main-page' && page !== '') {
    import('./back-btn').then((result) => result && result.default('#back-btn'));
    isBackBtnLoad = true;
  }

  if (!isInit) {
    if (page === 'main-page' || page === '') {
      import('./fluid').then((result) => result && result.default());
      import('./mainPage').then((result) => result && result.default());
    }
    page === 'about' && import('./randomFacts').then((result) => result && result.default());
    page === 'my-works' && import('./myWorks').then((result) => result && result.default());
    page === 'contacts' && import('./FormManager').then(({ default: FormManager }) => FormManager && new FormManager());
    page === 'accessibility' && putYouTubeAfterEl(accessibilityHeader, 'https://www.youtube.com/embed/c1W9u6SN2Cw');
    page === 'regexp' && putYouTubeAfterEl(regexpHeader, 'https://www.youtube.com/embed/ZJw-nqtDrWc');
    if (page === 'pokedex') {
      pokedexHeader.insertAdjacentHTML('afterend', `<img src="${POKEDEXHOME}" alt="Pokedex site img"/>`);
      putYouTubeAfterEl(examplePokedex, 'https://www.youtube.com/embed/3QXCrih6_MI');
    }
    page === 'portfolio' &&
      portfolioHeader.insertAdjacentHTML('afterend', `<img src="${PORTFOLIO}" alt="Portfolio site img"/>`);
    page === 'english-learn' &&
      englishHeader.insertAdjacentHTML('afterend', `<img src="${ENGLISH}" alt="English site img"/>`);
    if (page === 'thanos-effect') {
      thanosHeader.insertAdjacentHTML(
        'afterend',
        `<video loop='' autoplay='' muted='' poster='${THANOS}'>
         <source src="${EFFECTTHANOS}" />
       </video>`,
      );
    }
    if (page === 'RPG') {
      rpgHeader.insertAdjacentHTML(
        'afterend',
        `<video loop='' autoplay='' muted='' poster=''>
         <source src="${GAMEJSPRO}" />
       </video>`,
      );
    }

    breadCrumbs[pathIndex].isInit = true;
  }
};

export default dynamicImports;
