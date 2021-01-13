(function () {
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
        const linkName = this.dataset.href;

        navigationWrapper.dataset.navWrapper = linkName;
        router.navigate(linkName);
    }));

    setTimeout(_ => {
        navigationWrapper.dataset.navWrapper = path;
        router.add(path, () => {
            navigationWrapper.dataset.navWrapper = path;
        });
    }, 2000);

    window.addEventListener('hashchange', _ => {
        const hash = window.location.hash.split('#')[1];

        if (hash !== navigationWrapper.dataset.navWrapper) {
            navigationWrapper.dataset.navWrapper = hash;
        }
    })

})();