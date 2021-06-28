import { createAccountValidate } from './Auth.logic';

describe("createAccountValidate logic test", () => {
  it("checks if the password field is empty", () => {
    const logic = createAccountValidate("", "");

    expect(logic).toBe("Digite sua senha");
  });

  it("checks if the password fields match", () => {
    const logic = createAccountValidate("myPassword@123", "NotMyPassword");

    expect(logic).toBe("As senhas não conferem");
  });

  it("checks if the password fields match without case sensitive", () => {
    const logic = createAccountValidate("orange", "orANge");

    expect(logic).toBe("As senhas não conferem");
  });

  it("checks if the password field is the same as confirm password", () => {
    const logic = createAccountValidate("myPassword@123", "myPassword@123");

    expect(logic).toBe(false);
  });
});
