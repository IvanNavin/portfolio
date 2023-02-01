import { btn } from '../btn';

const ru = {
  text: `Pokedex - это результат продвинутого Реакт марафона, который проводит Зар Захаров
        В этом марафоне мне очень понравился дизайн и новые технологии Реакт

        В дизайне был kit - набор и названия всех цветов, градиентов, шрифты и их размеры и т.д.
        Входе марафона я реализовал в этом проэкте следующие технологии:`,
  secondText: `На самом деле в этом марафоне много интересных моментов.
        Весь проэкт написан на хуках.
        
        В последствии мне это чень помогло - когда я перешёл в новую комманду по реакту, я тут же начал переводить хоки
        на хуки. Впоследствии я смог поделиться этими знаниями с коллективом.`,
  thirdText:
    'К сожалению апишка написана с http протоколом и на https не работает ниже видео демонстрация работающего проекта',
  fourText: `В ходе написания данного проекта я самостоятельно добавил на своё усмотрение фильтр по типам и атаке, а так-же
            сделал модальные окна через "createPortal".
        В будующем я планирую добавить в проект бесконечную подгрузку`,
};
const ua = {
  text: `Pokedex - це результат продвинутого Реакту марафону, який проводить Зар Захаров
         У цьому марафоні мені дуже сподобався дизайн та нові технології.

         У дизайні був kit - набір та назви всіх кольорів, градієнтів, шрифти та їх розміри тощо.
         Вході марафону я реалізував у цьому проекті такі технології:`,
  secondText: `Насправді у цьому марафоні багато цікавих моментів.
         Весь проект написано на хуках.
        
         Надалі мені це дуже допомогло - коли я перейшов у нову React команду, я відразу почав перекладати хокі
         на хуки. Згодом я зміг поділитись цими знаннями з колективом.`,
  thirdText:
    'На жаль, апішка написана з http протоколом і на https не працює нижче відео демонстрація працюючого проекту',
  fourText: `У ході написання даного проекту я самостійно додав на свій розсуд фільтр за типами та атакою, а також
             зробив модальні вікна через "createPortal".
         У майбутньому я планую додати до проекту нескінченне підвантаження`,
};
const en = {
  text: `Pokedex is the result of an advanced React Marathon run by Zar Zakharov
         In this marathon, I really liked the design and new technologies of React

         There was a kit in the design - a set and names of all colors, gradients, fonts and their sizes, etc.
         At the entrance of the marathon, I implemented the following technologies in this project:`,
  secondText: `In fact, there are many interesting moments in this marathon.
         The whole project is written in hooks.
        
         Later, it helped me a lot - when I switched to the new React command, I immediately began to translate HOC
         on hooks. Subsequently, I was able to share this knowledge with the team.`,
  thirdText:
    'Unfortunately API is written with the http protocol and does not work on https below video demonstration of a working project',
  fourText: `In the course of writing this project, I independently added at my discretion a filter by type and attack, as well as
             made modals via "createPortal".
         In the future, I plan to add infinite loading to the project.`,
};
const englishLearnText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.pokedex');
  const paragraph = wrapper.querySelectorAll('p');
  const { local = 'en' } = window;
  const { text, secondText, thirdText, fourText } = englishLearnText[local];

  paragraph[0].innerText = text;
  paragraph[1].innerText = secondText;
  paragraph[2].innerText = thirdText;
  paragraph[3].innerText = fourText;
  btn(wrapper);
};
