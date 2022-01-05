const ru = {
  title: 'Мои работы',
  description:
    'Так как в компаниях в которых я работал я подписал NDA(договор о неразглашении) мне придётся сюда выложить свои пэт проэкты',
};
const ua = {
  title: 'Мої роботи',
  description:
    'Так як у компаніях, в яких я працював, я підписав NDA (договір про нерозголошення) мені доведеться сюди викласти свої пет проєкти',
};
const en = {
  title: 'My works',
  description:
    'Since in the companies in which I worked, I signed an NDA (non-disclosure agreement), I will have to post sandbox here',
};
const myWorks = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.my-works');
  const header = wrapper.querySelector('h2');
  const paragraph = wrapper.querySelector('p');
  const { local = 'ru' } = window;
  const { title, description } = myWorks[local];

  header.innerText = title;
  paragraph.innerText = description;
};
