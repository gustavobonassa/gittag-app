import { IRepository } from '../../types/Repository.interface';

import { filterRepositories } from './Repositories.logic';

const repoMock = [
  {
    id: "1",
    name: "my repo",
    tags: ["friends", "chess"],
  },
  {
    id: "2",
    name: "HELLO WORLD",
    tags: ["javascript", "python", "poNey"],
  },
  {
    id: "3",
    name: "My little Poney",
    tags: ["horse", "soccer", "Java"],
  },
] as IRepository[];

describe("filterRepositories logic test", () => {
  it("shows all with empty input", () => {
    const logic = filterRepositories("", repoMock);

    expect(logic.length).toBe(3);
  });

  it("filters names correctly", () => {
    const logic = filterRepositories("my repo", repoMock);

    expect(logic.length).toBe(1);
    expect(logic[0].id).toBe("1");
  });

  it("filters names with case sensitive", () => {
    const logic = filterRepositories("My", repoMock);

    expect(logic.length).toBe(2);
    expect(logic[0].name).toBe("my repo");
    expect(logic[1].name).toBe("My little Poney");
  });

  it("filters tags correctly", () => {
    const logic = filterRepositories("pyth", repoMock);

    expect(logic.length).toBe(1);
    expect(logic[0].id).toBe("2");
  });

  it("filters tags with case sensitive", () => {
    const logic = filterRepositories("JaVa", repoMock);

    expect(logic.length).toBe(2);
    expect(logic[0].id).toBe("2");
    expect(logic[1].id).toBe("3");
  });

  it("filter tags and names", () => {
    const logic = filterRepositories("pone", repoMock);

    expect(logic.length).toBe(2);
    expect(logic[0].id).toBe("2");
    expect(logic[1].id).toBe("3");
  });
});
