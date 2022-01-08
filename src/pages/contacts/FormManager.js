const clearAllErrors = () => {
  document.querySelectorAll('[data-fld]').forEach((fld) => {
    const wrapper = fld.closest('[data-form-block]');
    const hint = wrapper.querySelector('.hint');

    hint && wrapper.removeChild(hint);
  });
};

const addError = (to, message) => {
  clearAllErrors();
  const wrapper = to.closest('[data-form-block]');
  const html = `<span class="hint">${message}</span>`;

  wrapper.insertAdjacentHTML('beforeend', html);
};

const removeError = (to) => {
  const wrapper = to.closest('[data-form-block]');
  const hint = wrapper.querySelector('.hint');

  hint && wrapper.removeChild(hint);
};

export const validator = ({ name, message }) => {
  if (name.value === '' || name.value.length < 2) {
    addError(name, 'Введите более 1 символа');
    return false;
  }

  if (message.value === '') {
    addError(message, 'Это поле не может быть пустым');
    return false;
  }

  return true;
};

export default class FormManager {
  constructor() {
    this.focusCls = 'fld-focus';
    this.completeCls = 'fld-complete';
    this.fields = document.querySelectorAll('[data-fld]');
    this.init();
  }

  fldFocus(fld) {
    const wrap = fld.closest('[data-form-block]');

    if (fld.value === '') {
      wrap.classList.remove(this.completeCls);
    }

    wrap.classList.add(this.focusCls);
  }

  fldBlur(fld) {
    const wrap = fld.closest('[data-form-block]');

    wrap.classList.remove(this.focusCls);

    if (fld.value !== '') {
      wrap.classList.add(this.completeCls);
    } else {
      wrap.classList.remove(this.completeCls);
    }
  }

  init() {
    if (this.fields.length) {
      this.fields.forEach((fld) => {
        fld.addEventListener('focus', () => {
          this.fldFocus(fld);
        });
      });

      this.fields.forEach((fld) => {
        fld.addEventListener('blur', () => {
          this.fldBlur(fld);
        });
      });

      this.fields.forEach((fld) => {
        fld.addEventListener('input', () => {
          removeError(fld);
        });
      });

      this.fields.forEach((fld) => this.fldBlur(fld));
    }
  }
}
