import { btn } from '../btn';

const ru = {
  text: `Работая в EvoPlay мне поступила задача: воспроизвести эфект Таноса.
        Что нужно сделать?
        Нужно сделать распад картинок, как в фильме Мстители 3: Война бесконечности. Картинки должны распадаться на пепел и разлетаться по ветру.
        Немного полапатив интернет, я обнаружил много примеров данной реализации.
        Все примеры которые я находил, были сделаны с библиотекой html2canvas, меня это немного не устраивало! Т.к. мне нужно разщиплять на атомы только картинки а не любой контент. А для этих целей подойдут и обычные средства canvas.
        Поэтому я сделал этот эффект без применения библиотеки html2canvas`,
};
const ua = {
  text: `Працюючи в EvoPlay мені надійшло завдання: відтворити ефект Таноса.
        Що потрібно зробити?
        Потрібно зробити розпад картинок, як у фільмі «Месники 3». Картинки повинні розпадатися на попіл і розлітатися за вітром.
        Трохи полапатив інтернет, я виявив багато прикладів даної реалізації.
        Всі приклади, які я знаходив, були зроблені з бібліотекою html2canvas, мене це трохи не влаштовувало! Т.к. мені потрібно розщиплювати на атоми тільки картинки, а не будь-який контент. А для цих цілей підійдуть і звичайні засоби canvas.
        Тому я зробив цей ефект без застосування бібліотеки html2canvas`,
};
const en = {
  text: `While working in EvoPlay, I received a task: to reproduce the Thanos effect.
        What should be done?
        You need to make the disintegration of the pictures, as in the movie Avengers 3 Pictures should disintegrate into ash and fly in the wind.
        After a little surfing the Internet, I found many examples of this implementation.
        All the examples that I found were made with the html2canvas library, it didn't suit me a bit! Because I need to split into atoms only pictures and not any content. Ordinary canvas is fine for this.
        So I made this effect without using html2canvas library`,
};
const RPGText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.thanos-effect');
  const paragraph = wrapper.querySelector('p');
  const { local = 'ru' } = window;
  const { text } = RPGText[local];

  paragraph.innerText = text;
  btn(wrapper);
};
