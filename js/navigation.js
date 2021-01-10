(function () {
    const navigationWrapper = document.querySelector('[data-nav-wrapper]');
    const navMenu = document.querySelector('[data-nav-menu]')

    if (navigationWrapper.dataset.navWrapper === '') {
        navigationWrapper.dataset.navWrapper = 'main-page'
    }

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

    const router = new Router({
        mode: 'hash',
        root: '/'
    });

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
        console.log('linkName:', linkName);
        navigationWrapper.dataset.navWrapper = linkName;
        router.navigate(linkName);
    }));
    const path = router.getFragment() ? router.getFragment() : 'main-page';

    router.add(path, () => {
            navigationWrapper.dataset.navWrapper = path
        })
        // .add('', () => {
        //     // general controller
        //     console.log('welcome in catch all controller');
        // });
})();