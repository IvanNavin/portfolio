import { btn } from '../btn';

const ru = {
  text: 'Это результат тестового задания. В нём я использовал технологии которые использывал в прошлом проекте.',
};
const ua = {
  text: 'Це результат тестового завдання. У ньому я використовував технології, які використовував в минулому проекті.',
};
const en = {
  text: 'This is the testing task. Here I use the technologies that I use in the previous project.',
};

const ganttChartText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.ganttChart');
  const paragraph = wrapper.querySelector('p');
  const { local = 'en' } = window;
  const { text } = ganttChartText[local];

  paragraph.innerText = text;
  btn(wrapper);
};
