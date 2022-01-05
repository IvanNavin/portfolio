const ru = {
  title: 'Мои доклады',
  regexp: 'Не бойтесь регулярных выражений',
  accessibility: 'Разработка доступных интерфейсов️',
};
const ua = {
  title: 'Мої доповіді',
  regexp: 'Не бійтеся регулярних виразів',
  accessibility: 'Розробка доступних інтерфейсів️',
};
const en = {
  title: 'My reports',
  regexp: "Don't be afraid of regular expressions",
  accessibility: 'Development accessible interfaces️',
};
const performancesText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('section.performances');
  const header = wrapper.querySelector('h2');
  const regexpBtn = wrapper.querySelector('[data-href="regexp"]');
  const accessibilityBtn = wrapper.querySelector('[data-href="accessibility"]');
  const { local = 'ru' } = window;
  const { title, regexp, accessibility } = performancesText[local];

  header.innerText = title;
  regexpBtn.innerText = regexp;
  accessibilityBtn.innerText = accessibility;
};
