import { btn } from '../btn';

const ru = {
  text: `Здесь получилось написать онлайн игру в которой могут играть сразу несколько человек.
        Прикольный опыт работы с сокетами и с серверной частью.
        Есть онлайн чат.
        Стек: HTML / SASS / JS/ Webpack5 / Websocket(socket.io) / EsLint / Prettier
        Что бы проверить работоспособность игры и чата, можно запустить игру на нескольких вкладках.
        К сожалению бекенд сейчас не работает.`,
};
const ua = {
  text: `Тут вдалося написати онлайн гру в якій можуть грати відразу кілька людей.
         Прикольний досвід роботи з сокетами та серверною частиною.
         Є онлайн-чат.
         Стек: HTML / SASS / JS / Webpack5 / Websocket (socket.io) / EsLint / Prettier
         Щоб перевірити працездатність гри та чату, можна запустити гру на декількох вкладках.
         Нажаль зараз бекенд не працює.`,
};
const en = {
  text: `Here I managed to write an online game in which several people can play at once.
         This is cool experience with sockets and server side.
         There is an online chat.
         Stack: HTML / SASS / JS / Webpack5 / Websocket (socket.io) / EsLint / Prettier
         To check the functionality of the game and chat, you can launch the game in several tabs.
         Currently the backend is not working now.`,
};
const RPGText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.RPG');
  const paragraph = wrapper.querySelector('p');
  const { local = 'en' } = window;
  const { text } = RPGText[local];

  paragraph.innerText = text;
  btn(wrapper);
};
