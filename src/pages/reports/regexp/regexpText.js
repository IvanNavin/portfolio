const ru = {
  title: 'Не бойтесь регулярных выражений',
  linkName: 'Полезные ссылки',
  wikiLink: 'Регулярные выражения на википедии',
  learnJS: 'Учебник по регулярным выражениям на learn.javascript.ru',
  crib: 'Шпаргалка по регулярным выражениям',
};
const ua = {
  title: 'Не бійтеся регулярних виразів',
  linkName: 'Корисні посилання',
  wikiLink: 'Регулярки на вікіпедії',
  learnJS: 'Туторіал з регулярних виразів на learn.javascript.ru',
  crib: 'Шпаргалка по регуляркам',
};
const en = {
  title: "Don't be afraid of regular expressions",
  linkName: 'Useful links',
  wikiLink: 'Regular expressions on wiki',
  learnJS: 'Regular Expression Tutorial at learn.javascript.ru',
  crib: 'Regular Expression Cheat Sheet',
};
const regexpText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.regexp');
  const headers = wrapper.querySelectorAll('h2');
  const links = wrapper.querySelectorAll('a');
  const { local = 'en' } = window;
  const { title, linkName, wikiLink, learnJS, crib } = regexpText[local];

  headers[0].innerText = title;
  headers[1].innerText = linkName;
  links[0].innerText = wikiLink;
  links[3].innerText = learnJS;
  links[4].innerText = crib;
};
