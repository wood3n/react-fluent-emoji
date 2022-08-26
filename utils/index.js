import { upperFirst } from "lodash-es";

/**
 * turn snake case to pascal case
 * eg: smiling_face_with_halo_flat -> SmilingFaceWithHaloFlat
 * @param {*} str
 * @returns
 */
export const snakeCaseToPascalCase = (str) => {
  return str.split("_").map(upperFirst).join("");
};

/**
 * turn pascal case to kebab case
 * eg: SmilingFaceWithHaloFlat -> smiling-face-with-halo-flat
 * @param {*} str
 */
export const pascalCaseToKebabCase = (str) => {
  return str.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
};

/**
 * get file name, etc...
 * @param {*} path
 */
export const getFileInfo = (path) => {
  const fileName = path.split(/(\\|\/)/g).pop();
  const iconName = pascalCaseToKebabCase(fileName.split(".").shift());
  return {
    fileName,
    iconName
  };
};