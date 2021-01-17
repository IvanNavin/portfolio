const navigation = () => {
    const navigationWrapper = document.querySelector('[data-nav-wrapper]');
    const navMenu = document.querySelector('[data-nav-menu]');
    const router = new Router({mode: 'hash', root: '/'});
    const path = router.getFragment() ? router.getFragment() : 'main-page';

    const buttons = {
        0: {
            firstName: 'Привет!',
            secondName: 'Обо мне',
            dataHref: 'about'
        },
        1: {
            firstName: 'Меня',
            secondName: 'Мои работы',
            dataHref: 'my-works'
        },
        2: {
            firstName: 'зовут',
            secondName: 'контакты',
            dataHref: 'contacts'
        },
        3: {
            firstName: 'Иван',
            secondName: 'Доклады',
            dataHref: 'performances'
        },
    };

    if (navigationWrapper.dataset.navWrapper === '') {
        navigationWrapper.dataset.navWrapper = 'main-page';
    }

    Object.values(buttons).forEach(button => {
        const html = `
            <button data-href="${button.dataHref}"><span data-name-button="${button.firstName}" data-second-name-button="${button.secondName}"></span></button>
        `;

        navMenu.insertAdjacentHTML( 'beforeend', html );
    });

    const links = document.querySelectorAll('[data-href]');

    links.forEach(link => link.addEventListener('click', function (e) {
        e.preventDefault();
        const fadeInElement = document.querySelector('.fadein');
        const fadeOutElement = document.querySelector('.fadeout');
        const prevLinkName = navigationWrapper.dataset.navWrapper;
        const linkName = this.dataset.href;
        const prevSection = document.querySelector(`.${prevLinkName}`);
        const nextSection = document.querySelector(`.${linkName}`);

        fadeInElement && fadeInElement.classList.remove('fadein');
        fadeOutElement && fadeOutElement.classList.remove('fadeout');
        prevSection.classList.add('fadeout');

        setTimeout(() => {
            navigationWrapper.dataset.navWrapper = linkName;
            router.navigate(linkName);
            nextSection.classList.add('fadein');
        }, 400);
    }));


    window.addEventListener('load', () => {
        navigationWrapper.dataset.navWrapper = path;
        router.add(path, () => {
            navigationWrapper.dataset.navWrapper = path;
        });
    });

    window.addEventListener('hashchange', _ => {
        const hash = window.location.hash.split('#')[1] || 'main-page';
        const fadeInElement = document.querySelector('.fadein');
        const fadeOutElement = document.querySelector('.fadeout');

        if (hash !== navigationWrapper.dataset.navWrapper) {
            navigationWrapper.dataset.navWrapper = hash;
            fadeInElement && fadeInElement.classList.remove('fadein');
            fadeOutElement && fadeOutElement.classList.remove('fadeout');
        }
    })
}

const preloader = _ => {
    const allElements = document.querySelectorAll("img,video");
    const progress = document.querySelector('[data-progress]');
    const allLength = allElements.length;
    let percent = 0;
    let loaded = 1;

    const handleEvent = _ => {
        percent = Math.floor(++loaded / allLength * 100);
        progress.textContent = `${percent}%`;
    }

    Object.values(allElements).forEach(element => element.addEventListener('load', handleEvent, true));
}

(function () {
    preloader();
    navigation();
})();