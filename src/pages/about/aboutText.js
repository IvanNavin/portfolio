import randomFacts from './randomFacts';

const ru = {
  title: 'Всем привет!',
  text: `С 12 лет я мечтал быть программистом и творить, что-то интересное. Я понимал, что это очень сложно - но меня это не пугало! Я изучал сначала Basic, Pascal и потом Delphi. Но жизнь так сложилась, что мой жизненный путь пошел другим путём. И спустя некоторое время я снова решил заниматься любимым делом. В интернете много доступной информации и я стал изучать Front-end разработку.
        Сейчас я занимаюсь разработкой Front-end приложений, вёрсткой и обслуживанием сайтов.
        Мне нравится превращать сложные задачи в простые, красивые и интуитивно понятные конструкции.
        Когда я не пишу код, я играю на ps5, жарю мясо или уделяю время семье.
        C 2018 по 2021 год я работал в компании "EvoPlay".
        С 2021 года я работаю в "Luxoft".
        Мне нравятся интересные задачи и находить интересные решения для них
        В компании я стараюсь проявлять свои софт-скилы
        Провожу доклады и стараюсь быть нужным.
        Имею опыт работы с:`,
  description: 'Паралельно изучаю новые технологии и стараюсь ими делится с другими.',
  factsHeader: 'Случайные факты:',
  facts: [
    [0, 'Не курю'],
    [1, 'Не пью алкоголь'],
    [2, 'Пью много чая'],
    [3, 'Мне нравится интерьерный дизайн'],
    [4, 'Играю на гитаре'],
    [5, 'Люблю готовить мясо'],
    [6, 'Люблю свою семью'],
    [7, 'Люблю путешествовать'],
    [8, 'Не пью кофе'],
    [9, 'Весёлый'],
    [10, 'Общительный'],
    [11, 'Люблю смотреть сериалы'],
    [12, 'Коммуникабельный'],
    [13, 'Оптимист'],
  ],
  download: 'скачать резюме',
};
const ua = {
  title: 'Всім привіт!',
  text: `З 12 років я мріяв бути програмістом і творити щось цікаве. Я розумів, що це дуже складно – але мене це не лякало! Я вивчав спочатку Basic, Pascal і далі Delphi. Але життя так склалося, що мій життєвий шлях пішов іншим шляхом. І згодом я знову вирішив займатися улюбленою справою. В інтернеті багато доступної інформації, і я став вивчати Front-end розробку.
      Зараз я займаюся розробкою Front-end додатків, версткою та обслуговуванням сайтів.
      Мені подобається перетворювати складні завдання на прості, красиві та інтуїтивно зрозумілі конструкції.
      Коли я не пишу код, я граю на ps5, жарю м'ясо або приділяю час сім'ї.
      З 2018 по 2021 рік я працював у компанії "EvoPlay".
      З 2021 року я працюю в "Luxoft".
      Мені подобаються цікаві завдання та знаходити цікаві рішення для них
      У компанії я намагаюся виявляти свої софт-скіли
      Проводжу доповіді та намагаюся бути потрібним.
      Маю досвід роботи з:`,
  description: 'Паралельно вивчаю нові технології та намагаюся ними ділиться з іншими.',
  factsHeader: 'Випадкові факти:',
  facts: [
    [0, 'Не курю'],
    [1, "Не п'ю алкоголь"],
    [2, "П'ю багато чаю"],
    [3, "Мені подобається інтер'єрний дизайн"],
    [4, 'Граю на гітарі'],
    [5, "Люблю готувати м'ясо"],
    [6, "Люблю свою сім'ю"],
    [7, 'Люблю подорожувати'],
    [8, "Не п'ю кави"],
    [9, 'Веселий'],
    [10, 'Говіркий'],
    [11, 'Люблю дивитися серіали'],
    [12, 'Комунікабельний'],
    [13, 'Оптіміст'],
  ],
  download: 'скачати резюме',
};
const en = {
  title: 'Hello There!',
  text: `Since I was 12, I dreamed of being a programmer and creating something interesting. I understood that it was very difficult - but it didn’t scare me! I studied first Basic, Pascal and then Delphi. But life turned out so that my life path took a different path. And after a while I again decided to do what I loved. There is a lot of information available on the Internet and I began to study Front-end development.
        Now I am engaged in the development of Front-end applications, layout and maintenance of sites.
        I like to turn complex tasks into simple, beautiful and intuitive designs.
        When I’m not coding, I’m playing ps5, roasting meat, or taking time out for my family.
        From 2018 to 2021, I worked for EvoPlay.
        From 2021, I have been working at Luxoft.
        I like interesting tasks and find interesting solutions for this
        In the company I try to show my soft skills
        I give talks and try to be relevant.
        I have experience working with:`,
  description: 'At the same time, I study new technologies and try to share them with others.',
  factsHeader: 'Random facts:',
  facts: [
    [0, "I don't smoke"],
    [1, "I don't drink alcohol"],
    [2, 'I drink a lot of tea'],
    [3, 'I like interior design'],
    [4, 'I play the guitar'],
    [5, 'I like to cook meat'],
    [6, 'I love my family'],
    [7, 'I like to travel'],
    [8, "I don't drink coffee"],
    [9, 'Funny person'],
    [10, 'Talkative'],
    [11, 'I like to watch TV series'],
    [12, 'Sociable'],
    [13, 'Optimist'],
  ],
  download: 'download CV',
};
const aboutText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.about');
  const h = wrapper.querySelector('h2');
  const p = wrapper.querySelector('.text');
  const descript = wrapper.querySelector('.description');
  const factsTitle = wrapper.querySelector('.facts-header');
  const btn = wrapper.querySelector('.download');
  const { local = 'ru' } = window;
  const { title, text, description, factsHeader, facts, download } = aboutText[local];

  h.innerText = title;
  p.innerHTML = text;
  descript.innerHTML = description;
  factsTitle.innerHTML = factsHeader;
  randomFacts(facts);
  btn.querySelector('b').innerText = download;
};
