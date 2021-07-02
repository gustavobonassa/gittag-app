import { IRepository } from "../../types/Repository.interface";

/**
 * This function filters the user's starred repositories by tag and repository name
 * @param text search input text
 * @param repositories all repositories with star
 * @returns all star repositories that match the search
 */
function filterRepositories(text: string, repositories: IRepository[] | undefined): IRepository[] {
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
