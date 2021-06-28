
function createAccountValidate(password: string, confirmPassword: string) {
  if (!password) {
    return "Digite sua senha";
  }
  if (password !== confirmPassword) {
    return "As senhas não conferem";
  }

  return false;
}

export {
  createAccountValidate,
};
