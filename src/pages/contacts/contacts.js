export default () => {
  const form = document.forms.contactForm;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(form);
    formData.forEach((item) => console.log(item));
    const name = formData.get('name');
    const message = formData.get('message');
    const token = '5094623202:AAENP1keUX-FJe7Dp5lAcpPOCu3ze1hsIGU';
    const chatId = -777552229;
    const text = `Сообщение от ${name}: Сообщение: ${message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  });
};
