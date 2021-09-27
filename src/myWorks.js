import PORTFOLIO from './img/portfolio.png';
import POKEDEXHOME from './img/pokedex-home.png';
import POKEDEXDESKTOP from './img/pokedex-desktop.png';
import THANOSBACK from './img/thanos-back.jpeg';
import THANOS from './img/thanos.jpg';

const myWorks = () => {
  const works = [
    {
      dataHref: 'RPG',
      backUrl: '',
      frontUrl: '',
    },
    {
      dataHref: 'portfolio',
      backUrl: PORTFOLIO,
      frontUrl: '',
    },
    {
      dataHref: 'pokedex',
      backUrl: POKEDEXHOME,
      frontUrl: POKEDEXDESKTOP,
    },
    {
      dataHref: 'thanos-effect',
      backUrl: THANOSBACK,
      frontUrl: THANOS,
    },
    {
      dataHref: 'english-learn',
      backUrl: '',
      frontUrl: '',
    },
  ];

  works.forEach((work) => {
    const button = document.querySelector(`[data-href=${work.dataHref}]`);
    const main = button.querySelector('.main');
    const picture = button.querySelector('picture.img');

    work.backUrl && main.insertAdjacentHTML('afterbegin', `<img class="back" src="${work.backUrl}" alt="img"/>`);
    work.frontUrl && picture.insertAdjacentHTML('afterbegin', `<img src="${work.frontUrl}" alt="img"/>`);
  });
};

export default myWorks;
