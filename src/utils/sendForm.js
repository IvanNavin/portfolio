import { validator } from '../pages/contacts/FormManager';

export default function sendForm() {
  // eslint-disable-next-line consistent-return
  function submitHandler(event) {
    event.preventDefault();

    const button = this.querySelector('button[type="submit"]');

    const templateParams = {
      from_name: this.name.value,
      message: this.message.value,
    };

    const successHandler = () => {
      button.classList.add('sent');
    };

    const errorHandler = (error) => {
      button.classList.add('error');
      window.console.error('FAILED...', error);
    };

    const finallyHandler = () => button.classList.remove('send', 'load');

    if (!validator(this)) {
      return false;
    }
    button.classList.add('send');

    setTimeout(() => {
      if (button.classList.contains('send')) {
        button.classList.add('load');
      }
    }, 1000);

    // eslint-disable-next-line no-undef
    emailjs
      .send('service_p87kxia', 'template_s5whvsc', templateParams, 'user_zvgv0ouqyrlxggmY5RXt7')
      .then(successHandler, errorHandler)
      .finally(finallyHandler);

    return false;
  }

  document.getElementById('contact-form').addEventListener('submit', submitHandler);
}
