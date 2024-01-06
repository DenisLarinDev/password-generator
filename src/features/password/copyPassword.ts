export const copyPassword = (password: string) => {
  navigator.clipboard.writeText(password).then(() => {
    alert("Пароль скопирован");
  });
};
