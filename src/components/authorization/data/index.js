export const emailValidation = {
  required: 'Поле "email" не повинно бути порожнім',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Неправильна email адреса',
  },
};

export const passwordValidation = {
  required: 'Поле "пароль" не має бути порожнім',
  minLength: {
    value: 8,
    message: 'Пароль повинен складатися мінімум із 8 символів',
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{8,}$/,
    message:
      'Пароль має містити щонайменше одну велику,  літеру анлійської розкладки та одну цифру, без символів',
  },
};
