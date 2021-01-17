(function () {

    const myWorksContainer = document.querySelector('.my-works');
    const myWorksWrapper = myWorksContainer.querySelector('ul.wrapper');
    const works = {
        0: {
            name: 'Portfolio',
            status: 'New',
            dataHref: 'portfolio',
            backUrl: './img/portfolio.png',
            frontUrl: '',
            stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations']
        },
        1: {
            name: 'Pokedex',
            status: 'in process',
            dataHref: 'pokedex',
            backUrl: './img/pokedex-home.png',
            frontUrl: './img/pokedex-desktop.png',
            stack: ['React', 'Redux', 'SSR', 'Scss', 'HookRouter', 'TS', 'Es-Lint']
        },
        2: {
            name: 'Thanos Effect',
            dataHref: 'thanos-effect',
            backUrl: './img/thanos-back.jpeg',
            frontUrl: './img/thanos.jpg',
            stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations']
        },
        3: {
            name: 'English learn',
            dataHref: 'english-learn',
            backUrl: '',
            frontUrl: '',
            stack: ['React', 'Redux', 'SCSS', 'Firebase']
        }
    }

    const template = ({name, status, dataHref, backUrl, frontUrl, stack}) => {
        let delay = 3;

        return `
            <li class="item">
                <button class="screen" data-href="${dataHref}">
                    ${status ? '<span class="status">' + status + '</span>' : ''}
                    <div class="bar">
                        <h5>${name}</h5>
                        <i></i>
                    </div>
                    <div class="main">
                        ${backUrl ? '<img class="back" src="' + backUrl + '" alt="">' : ''}
                        <div class="tags">
                            <ul>
                                ${stack.map(item => {
                                    return '<li style="--delay:0.' + delay++ +'s">' + item + '</li>'
                                }).join('')}
                            </ul>
                        </div>
                        <picture class="img">
                            ${frontUrl ? '<img src="' + frontUrl + '" alt="">' : ''}
                        </picture>
                    </div>
                </button>
            </li>
        `;
    }

    Object.values(works).forEach(work => {
        myWorksWrapper.insertAdjacentHTML( 'beforeend', template(work));
    })

})();