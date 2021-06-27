import { IRepository } from "../../types/Repository.interface";

function filterRepositories(text: string, repositories: IRepository[]) {
  const formattedText = String(text).toLowerCase();

  const filteredRepositories = (repositories || []).filter((repo) => {
    const matchName = (repo.name || "").toLowerCase().includes(formattedText);
    const matchTags = (repo.tags || []).find((t) => t.toLowerCase().includes(formattedText));

    return matchName || matchTags;
  });

  return filteredRepositories;
}

export {
  filterRepositories,
}
