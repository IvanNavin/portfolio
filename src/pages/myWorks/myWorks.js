import PORTFOLIO from '../../assets/img/portfolio.png';
import POKEDEXHOME from '../../assets/img/pokedex-home.png';
import POKEDEXDESKTOP from '../../assets/img/pokedex-desktop.png';
import THANOSBACK from '../../assets/img/thanos-back.jpeg';
import THANOS from '../../assets/img/thanos.jpg';
import ENGLISH from '../../assets/img/English.jpg';
import RPG from '../../assets/img/RPG.png';
import RPGGAME from '../../assets/img/RPG-GAME.png';
import GANTTCHARTFRONT from '../../assets/img/ganttChartFront.png';
import GANTTCHARTBACK from '../../assets/img/ganttChartBack.png';
import MINERBACK from '../../assets/img/minerBack.png';
import MINERFRONT from '../../assets/img/minerFront.png';

const myWorks = () => {
  const works = [
    {
      dataHref: 'miner',
      backUrl: MINERFRONT,
      frontUrl: MINERBACK,
    },
    {
      dataHref: 'ganttChart',
      backUrl: GANTTCHARTFRONT,
      frontUrl: GANTTCHARTBACK,
    },
    {
      dataHref: 'RPG',
      backUrl: RPG,
      frontUrl: RPGGAME,
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
      backUrl: ENGLISH,
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
