import { IRepository } from "../../types/Repository.interface";

function validateNewTag(tag: string, data: IRepository) {
  if (!tag) {
    return "Digite uma tag";
  }

  const tagExist = (data?.tags).find((t) => t === tag);
  if (tagExist) {
    return "Essa tag ja existe";
  }

  return false;
}

export {
  validateNewTag,
}
