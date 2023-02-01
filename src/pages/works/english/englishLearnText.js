import { btn } from '../btn';

const ru = {
  text: `English learn - это результат Реакт-марафона от Зара Захарова
        В ходе этого марафона мы познакомились с React и его жизненными циклами, научились работать с формами и с сервером "Firebase". Научились работать с пропсами и стейтом, пробрасывали их через компоненты и обратно. Для начала написали самописный redux, что бы понимать как он работает и в последствии подключили его. Иконки и формы мы брали из коллекции AntDesign. Подключили апишку словаря и использовали хранилище firebase для запоминания слов юзера. Прикрутили React Router и Thunk.
        Что бы использовать возможности сайта, нужно внести неизвестное английское слово в поле ввода. Далее это слово появится в базе данных "Firebase" и под полем ввода. Если кликнуть на слово, карточка перевернётся и с другой стороны карточки будет уже слово на русском языке. Далее это слово можно вычеркнуть, как запомненное или удалить как ненужное. Тогда это слово удалится и из базы ваших слов.
        </br>
        </br>
        Логин: reactmarathon@gmail.com
        </br>
        Пароль: 12345678
        </br>`,
};
const ua = {
  text: `English learn – це результат Реакт-марафону від Зара Захарова
        У ході цього марафону ми познайомилися з React та його життєвими циклами, навчилися працювати з формами та сервером "Firebase". Навчилися працювати з пропсами та стейтом, прокидали їх через компоненти та назад. Для початку написали самописний redux, щоб розуміти як він працює і згодом підключили його. Іконки та форми ми брали із колекції AntDesign. Підключили апішку словника і використовували сховище firebase для запам'ятовування слів користувача. Прикрутили React Router та Thunk.
        Щоб використати можливості сайту, потрібно внести невідоме англійське слово у поле введення. Далі це слово з'явиться в базі даних Firebase і під полем введення. Якщо натиснути на слово, картка перевернеться і з іншого боку картки буде вже слово російською мовою. Далі це слово можна викреслити як запам'ятоване або видалити як непотрібне. Тоді це слово видалиться і з бази ваших слів.
        </br>
        Логин: reactmarathon@gmail.com
        Пароль: 12345678
        </br>`,
};
const en = {
  text: `English learn is the result of the React Marathon from Zar Zakharov
        During this marathon, we got acquainted with React and its life cycles, learned how to work with forms and with the Firebase server. We learned how to work with props and states, passed them through the components and back. To begin with, we wrote a self-written redux to understand how it works and later connected it. We took icons and shapes from the AntDesign collection. We connected the dictionary apish and used the firebase storage to memorize the user's words. Attached React Router and Thunk.
        To use the site's capabilities, you need to enter an unknown English word in the input field. Further, this word will appear in the "Firebase" database and under the input field. If you click on a word, the card will turn over and on the other side of the card there will already be a word in Russian. Further, this word can be crossed out as memorized or deleted as unnecessary. Then this word will be deleted from the base of your words.
        </br>
        Login: reactmarathon@gmail.com
        Password: 12345678
        </br>`,
};
const englishLearnText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.english-learn');
  const paragraph = wrapper.querySelector('p');
  const { local = 'en' } = window;
  const { text } = englishLearnText[local];

  paragraph.innerHTML = text;
  btn(wrapper);
};
