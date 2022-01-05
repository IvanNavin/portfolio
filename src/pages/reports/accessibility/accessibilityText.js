const ru = {
  title: 'Разработка доступных интерфейсов',
  linkName: 'Ссылка на доклад',
};
const ua = {
  title: 'Розробка доступних інтерфейсів',
  linkName: 'Посилання на доповідь',
};
const en = {
  title: 'Development accessible interfaces',
  linkName: 'Link to the report',
};
const accesssibilityText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.accessibility');
  const header = wrapper.getElementById('accessibility');
  const linkTo = wrapper.querySelector('h2')[1];
  const { local = 'ru' } = window;
  const { title, linkName } = accesssibilityText[local];

  header.innerText = title;
  linkTo.innerText = linkName;
};
