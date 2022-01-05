const ru = {
  buttons: [
    {
      firstName: 'Привет!',
      secondName: 'Обо мне',
      dataHref: 'about',
    },
    {
      firstName: 'Меня',
      secondName: 'Мои работы',
      dataHref: 'my-works',
    },
    {
      firstName: 'зовут',
      secondName: 'контакты',
      dataHref: 'contacts',
    },
    {
      firstName: 'Иван',
      secondName: 'Доклады',
      dataHref: 'performances',
    },
  ],
  press: 'Нажмите "P" для паузы. Нажмите "Пробел" для нового эффекта',
};
const ua = {
  buttons: [
    {
      firstName: 'Вітання!',
      secondName: 'Про мене',
      dataHref: 'about',
    },
    {
      firstName: 'Мене',
      secondName: 'Мої роботи',
      dataHref: 'my-works',
    },
    {
      firstName: 'звати',
      secondName: 'контакти',
      dataHref: 'contacts',
    },
    {
      firstName: 'Іван',
      secondName: 'Доповіді',
      dataHref: 'performances',
    },
  ],
  press: 'Натисніть "P" для паузи. Натисніть "Пробіл" для нового ефекту',
};
const en = {
  buttons: [
    {
      firstName: 'Hello!',
      secondName: 'About me',
      dataHref: 'about',
    },
    {
      firstName: 'My',
      secondName: 'My works',
      dataHref: 'my-works',
    },
    {
      firstName: 'Name',
      secondName: 'contacts',
      dataHref: 'contacts',
    },
    {
      firstName: 'Ivan',
      secondName: 'performances',
      dataHref: 'performances',
    },
  ],
  press: 'Press "P" for Pause. Press "Space" for new effect',
};
const mainText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.main-page');
  const navMenu = wrapper.querySelector('[data-nav-menu]');
  const { local = 'ru' } = window;
  const { buttons, press } = mainText[local];
  const help = wrapper.querySelector('.help');
  const btnStyle = 'background: transparent; outline: transparent; border-color: transparent;';

  navMenu.innerHTML = '';
  help.innerHTML = press;

  buttons.forEach(({ firstName, secondName, dataHref }) => {
    navMenu.insertAdjacentHTML(
      'beforeend',
      `<button data-href="${dataHref}" style="${btnStyle}">
                <span data-name-button="${firstName}" data-second-name-button="${secondName}"></span>
              </button>`,
    );
  });
};
