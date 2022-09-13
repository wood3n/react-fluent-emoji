import { transform } from "@svgr/core";
import fs from "fs-extra";
import path from "path";
import glob from "glob";
import { snakeCaseToPascalCase } from "../utils/index.js";

(() => {
  const cwd = process.cwd();

  const getIconType = (filePath) => {
    const filePathSegs = path.dirname(filePath).split(/\\|\//);
    const map = new Map([
      [filePathSegs.includes("Color"), "color"],
      [filePathSegs.includes("Flat"), "flat"],
      [filePathSegs.includes("High Contrast"), "high contrast"],
    ]);

    return map.get(true);
  };

  let count = 0;
  const transfom = (filePath) => {
    const iconName = snakeCaseToPascalCase(path.basename(filePath, ".svg"));
    const iconType = getIconType(filePath);
    if (!iconType) {
      console.error("ICON TYPE ERROR: ", iconType, filePath);
      process.exit(1);
    }
    const svgCode = fs.readFileSync(path.resolve(cwd, filePath));

    try {
      const componentCode = transform.sync(
        svgCode,
        {
          // width
          icon: false,
          typescript: true,
          // in sequence
          plugins: [
            "@svgr/plugin-jsx",
            "@svgr/plugin-prettier"
          ],
          // support react 16
          jsxRuntime: "classic"
        },
        { componentName: iconName },
      );

      fs.outputFileSync(path.resolve(cwd, `src/icon-component/${iconType}/${iconName}.tsx`), componentCode);
      count++;
    } catch (err) {
      console.error("TRANSFORM ERROR:", filePath);
    }
  };

  const filePaths = glob.sync("src/fluent-emoji/**/*.svg", {
    cwd,
  });
  filePaths.forEach(transfom);

  console.log(`${count} icons has been transformed.`);
})();