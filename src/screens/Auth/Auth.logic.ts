
/**
 * This function checks if the password has been entered and if the passwords match
 * @param password the password field
 * @param confirmPassword the confirm password field
 * @returns Error message or false
 */
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
