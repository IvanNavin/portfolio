import FormManager, { validator } from './FormManager';

export default () => {
  const form = document.forms.contactForm;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const name = formData.get('name');
    const message = formData.get('message');
    const token = '5094623202:AAENP1keUX-FJe7Dp5lAcpPOCu3ze1hsIGU';
    const chatId = -777552229;
    const text = `Сообщение прислал ${name}: Сообщение: ${message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
    const formManager = new FormManager();
    const successHandler = () => {
      button.classList.add('sent');
    };
    const errorHandler = (error) => {
      button.classList.add('error');
      window.console.error('FAILED...', error);
    };
    const finallyHandler = () => {
      form.name.value = '';
      form.message.value = '';
      formManager.fldBlur(form.name);
      formManager.fldBlur(form.message);
      setTimeout(() => button.classList.remove('send', 'load'), 1000);
    };

    if (
      !validator({
        name: form.name,
        message: form.message,
      })
    ) {
      return false;
    }
    button.classList.add('send');

    setTimeout(() => {
      if (button.classList.contains('send')) {
        button.classList.add('load');
      }
    }, 1000);

    fetch(url)
      .then((response) => response.json())
      .then(successHandler)
      .catch(errorHandler)
      .finally(finallyHandler);
  });
};
