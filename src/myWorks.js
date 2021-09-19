import PORTFOLIO from './img/portfolio.png';
import POKEDEXHOME from './img/pokedex-home.png';
import POKEDEXDESKTOP from './img/pokedex-desktop.png';
import THANOSBACK from './img/thanos-back.jpeg';
import THANOS from './img/thanos.jpg';

const myWorks = () => {
  const myWorksContainer = document.querySelector('.my-works');
  const myWorksWrapper = myWorksContainer.querySelector('ul.wrapper');
  const works = [
    {
      name: 'RPG Online Game',
      status: 'New',
      dataHref: 'RPG',
      backUrl: '',
      frontUrl: '',
      stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations', 'Node', 'Hapi', 'Websockets', 'Chat'],
    },
    {
      name: 'Portfolio',
      status: 'New',
      dataHref: 'portfolio',
      backUrl: PORTFOLIO,
      frontUrl: '',
      stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations'],
    },
    {
      name: 'Pokedex',
      status: 'in process',
      dataHref: 'pokedex',
      backUrl: POKEDEXHOME,
      frontUrl: POKEDEXDESKTOP,
      stack: ['React', 'Redux', 'SSR', 'Scss', 'HookRouter', 'TS', 'Es-Lint'],
    },
    {
      name: 'Thanos Effect',
      dataHref: 'thanos-effect',
      backUrl: THANOSBACK,
      frontUrl: THANOS,
      stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations'],
    },
    {
      name: 'English learn',
      dataHref: 'english-learn',
      backUrl: '',
      frontUrl: '',
      stack: ['React', 'Redux', 'SCSS', 'Firebase'],
    },
  ];

  const template = ({ name, status, dataHref, backUrl, frontUrl, stack }) => {
    let delay = 3;

    return `
            <li class="item">
                <button class="screen" data-href="${dataHref}">
                    ${status ? `<span class="status">${status}</span>` : ''}
                    <div class="bar">
                        <h5>${name}</h5>
                        <i></i>
                    </div>
                    <div class="main">
                        ${backUrl ? `<img class="back" src="${backUrl}" alt="">` : ''}
                        <div class="tags">
                            <ul>
                                ${stack.map((item) => `<li style="--delay:0.${delay++}s">${item}</li>`).join('')}
                            </ul>
                        </div>
                        <picture class="img">
                            ${frontUrl ? `<img src="${frontUrl}" alt="">` : ''}
                        </picture>
                    </div>
                </button>
            </li>
        `;
  };

  works.forEach((work) => {
    myWorksWrapper.insertAdjacentHTML('beforeend', template(work));
  });
};

export default myWorks;
