import { IRepository } from "../../types/Repository.interface";

function validateNewTag(tag: string, data: IRepository) {
  if (!tag) {
    return "Digite uma tag";
  }

  const tagExist = (data?.tags).find((t) => t.toLowerCase() === tag.toLowerCase());
  if (tagExist) {
    return "Essa tag já existe";
  }

  return false;
}

export {
  validateNewTag,
}
