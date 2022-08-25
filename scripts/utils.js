import { upperFirst } from "lodash-es";

/**
 * 将 snake case 的文件名转换成 pascal case
 * eg: smiling_face_with_halo_flat -> SmilingFaceWithHaloFlat
 * @param {*} str
 * @returns
 */
export const snakeCaseToPascalCase = (str) => {
  return str.split("_").map(upperFirst).join("");
};