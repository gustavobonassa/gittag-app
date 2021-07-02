import { IRepository } from "../../types/Repository.interface";

/**
 * This function checks whether a tag has been entered and
 * whether it already exists in the current tag list
 * @param tag new tag to be inserted
 * @param data all repository data
 * @returns an error message or false
 */
function validateNewTag(tag: string, data: IRepository | undefined) {
  if (!tag) {
    return "Digite uma tag";
  }

  const tagExist = (data?.tags || []).find((t) => t.toLowerCase() === tag.toLowerCase());
  if (tagExist) {
    return "Essa tag já existe";
  }

  return false;
}

export {
  validateNewTag,
}
