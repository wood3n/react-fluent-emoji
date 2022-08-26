import { transform } from "@svgr/core";
import fs from "fs-extra";
import path from "path";
import glob from "glob";
import { last } from "lodash-es";
import { snakeCaseToPascalCase } from "../utils/index.js";

(() => {
  const cwd = process.cwd();

  const transfom = (filePath) => {
    const iconName = snakeCaseToPascalCase(path.basename(filePath, ".svg"));
    const iconType = last(path.dirname(filePath).split(path.sep)).toLocaleLowerCase();
    const svgCode = fs.readFileSync(path.resolve(cwd, filePath));

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
        jsxRuntime: "automatic"
      },
      { componentName: iconName },
    );

    fs.outputFileSync(path.resolve(cwd, `src/icon-component/${iconType}/${iconName}.tsx`), componentCode);
  };

  const filePaths = glob.sync("src/fluent-emoji/**/*.svg", {
    cwd,
  });
  filePaths.forEach(transfom);
})();