const ru = {
  title: 'Сказать привет',
  name: 'Имя',
  message: 'Сообщение',
  sendMsg: 'Отправить сообщение',
  msgSent: 'Сообщение отправлено',
  error: 'Упс... Что-то пошло не так',
};
const ua = {
  title: 'Сказати привіт',
  name: "Ім'я",
  message: 'Повідомлення',
  sendMsg: 'Надіслати повідомлення',
  msgSent: 'Повідомлення відправлено',
  error: 'Упс... Щось пішло не так',
};
const en = {
  title: 'Say Hi',
  name: 'Name',
  message: 'Message',
  sendMsg: 'Send Message',
  msgSent: 'Message sent',
  error: 'Oops, Error',
};
const contactsText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.contacts');
  const header = wrapper.querySelector('h2');
  const nameLbl = wrapper.querySelector('label[for="name"]');
  const messageLbl = wrapper.querySelector('label[for="message"]');
  const btn = wrapper.querySelector('button');
  const { local = 'ru' } = window;
  const { title, name, message, sendMsg, msgSent, error } = contactsText[local];

  header.innerText = title;
  nameLbl.innerHTML = name;
  messageLbl.innerText = message;
  btn.querySelector('span').innerText = sendMsg;
  btn.querySelector('.success').innerHTML = msgSent;
  btn.querySelector('.error').innerHTML = error;
};
