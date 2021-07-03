import { IRepository } from '../../types/Repository.interface';

import { validateNewTag } from './Repository.logic';

const data = {
  id: "1",
  name: "my repo",
  tags: ["friends", "chEss", "ORANGE"],
} as IRepository;

describe("validateNewTag logic test", () => {
  it("doesn't break with undefined", () => {
    const logic = validateNewTag("test", undefined);

    expect(logic).toBe(false);
  });

  it("check if the tag is blank", () => {
    const logic = validateNewTag("", data);

    expect(logic).toBe("Digite uma tag");
  });

  it("check if the tag already exists", () => {
    const logic = validateNewTag("friends", data);

    expect(logic).toBe("Essa tag já existe");
  });

  it("check if the tag already exists with case sensitive", () => {
    const logic = validateNewTag("orange", data);

    expect(logic).toBe("Essa tag já existe");
  });

  it("returns false if it passes validation", () => {
    const logic = validateNewTag("New tag", data);

    expect(logic).toBe(false);
  });
});
