(function () {

    const myWorksContainer = document.querySelector('.my-works');
    const myWorksWrapper = myWorksContainer.querySelector('ul.wrapper');
    const works = {
        0: {
            name: 'Pokedex',
            dataHref: 'pokedex',
            backUrl: './img/pokedex-home.png',
            frontUrl: './img/pokedex-desktop.png',
            stack: ['React', 'SSR', 'Scss', 'HookRouter', 'TS', 'Es-Lint']
        },
        1: {
            name: 'Thanos Effect',
            dataHref: 'thanos-effect',
            backUrl: './img/thanos-back.jpeg',
            frontUrl: './img/thanos.jpg',
            stack: ['HTML', 'CSS', 'JS', 'Canvas']
        }
    }

    const template = ({name, dataHref, backUrl, frontUrl, stack}) => {
        let delay = 3;

        return `
            <li class="item">
                <a href="#" class="screen" data-href="${dataHref}">
                    <div class="bar">
                        <h5>${name}</h5>
                        <i></i>
                    </div>
                    <div class="main">
                        <img class="back" src="${backUrl}" alt="">
                        <div class="tags">
                            <ul>
                                ${stack.map(item => {
                                    return '<li style="--delay:0.' + delay++ +'s">' + item + '</li>'
                                }).join('')}
                            </ul>
                        </div>
                        <picture class="img">
                            <img src="${frontUrl}" alt="">
                        </picture>
                    </div>
                </a>
            </li>
        `;
    }

    Object.values(works).forEach(work => {
        myWorksWrapper.insertAdjacentHTML( 'beforeend', template(work));
    })

})();