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
  const headers = wrapper.querySelectorAll('h2');
  const { local = 'en' } = window;
  const { title, linkName } = accesssibilityText[local];

  headers[0].innerText = title;
  headers[1].innerText = linkName;
};
