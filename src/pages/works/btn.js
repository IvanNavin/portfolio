const ru = {
  result: 'Результат смотрим тут',
  seeCodeHere: 'Код смотрим тут',
};
const ua = {
  result: 'Результат дивимося тут',
  seeCodeHere: 'Код дивимося тут',
};
const en = {
  result: 'See the result here',
  seeCodeHere: 'See the code here',
};
const btnText = { ru, ua, en };

export const btn = (wrapper) => {
  const resultBtn = wrapper.querySelector('[data-btn-text="result"]');
  const codeBtn = wrapper.querySelector('[data-btn-text="code"]');
  const { local = 'en' } = window;
  const { result, seeCodeHere } = btnText[local];

  resultBtn && (resultBtn.innerHTML = result);
  codeBtn && (codeBtn.innerHTML = seeCodeHere);
};
