import { transform } from '@svgr/core';
import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import { snakeCaseToPascalCase } from './utils.js';

(() => {
  const root = process.cwd();
  const filePaths = glob.sync('src/fluent-emoji/**/*.svg', {
    cwd: root,
  });

  console.log(filePaths);

  const transfom = (svg, iconName) => {
    const jsCode = transform.sync(
      svg,
      {
        icon: false,
        typescript: true,
        plugins: ['@svgr/plugin-svgo'],
        jsxRuntime: 'automatic',
        outDir: path.resolve(root, 'src/icon-component')
      },
      { componentName: iconName },
    );

    // console.log(jsCode);
    fs.writeFileSync(path.resolve(root, `src/icon-component/${iconName}.tsx`), jsCode);
  };

  filePaths.forEach(filePath => {
    const iconName = snakeCaseToPascalCase(path.basename(filePath, '.svg'));
    const svgXml = fs.readFileSync(path.resolve(root, filePath));
    transfom(svgXml, iconName);
  });
})();