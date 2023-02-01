export const langButton = (setLocale) => {
  const { local = 'en' } = window;
  const btnWrapper = document.getElementById('lang');
  const languageBtns = btnWrapper.querySelectorAll('.lang');

  ['ru', 'ua', 'en'].includes(local) && (btnWrapper.dataset.lang = local);

  languageBtns.forEach((btn) => {
    btn.addEventListener('click', ({ target }) => {
      setLocale(target.classList[1]);
    });
  });
};
