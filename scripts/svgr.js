import { transform } from "@svgr/core";
import fs from "fs-extra";
import path from "path";
import glob from "glob";
import { snakeCaseToPascalCase } from "./utils.js";

(() => {
  const root = process.cwd();
  const filePaths = glob.sync("src/fluent-emoji/**/*.svg", {
    cwd: root,
  });

  const transfom = (svg, iconName) => {
    const jsCode = transform.sync(
      svg,
      {
        // width
        icon: false,
        typescript: true,
        // in sequence
        // FIXME:some problem with svgo on 3D emoji
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        jsxRuntime: "automatic",
        // svgoConfig: {
        //   plugins: [
        //     {
        //       name: "preset-default",
        //       params: {
        //         overrides: {
        //           // disable remove viewBox, or it can't be controlled by width and height in react component
        //           removeViewBox: false,
        //         },
        //       },
        //     },
        //   ],
        // }
      },
      { componentName: iconName },
    );

    fs.writeFileSync(path.resolve(root, `src/icon-component/${iconName}.tsx`), jsCode);
  };

  filePaths.forEach(filePath => {
    const iconName = snakeCaseToPascalCase(path.basename(filePath, ".svg"));
    const svgXml = fs.readFileSync(path.resolve(root, filePath));
    transfom(svgXml, iconName);
  });
})();