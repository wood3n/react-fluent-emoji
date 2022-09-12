import path from "path";
import fs from "fs-extra";
import glob from "glob";
import File from "vinyl";
import SVGSpriter from "svg-sprite";
import { chunk } from "lodash-es";

(() => {
  const iconStats = [];
  const root = process.cwd();
  const outputPath = "public";
  const spriterOptions = {
    mode: {
      symbol: { // Create a CSS sprite
        inline: true
      }
    },
    log: "info",
    shape: {
      transform: [],
      id: {
        generator: (_, file) => file.stem.toLocaleLowerCase()
      }
    }
  };

  const files = glob.sync("src/fluent-emoji/**/Color/**/*.svg", {
    cwd: root
  });
  // 60 个一组
  chunk(files, 60).forEach((filePaths, index) => {
    const spriter = new SVGSpriter(spriterOptions);
    const svgSpriteChunkName = `chunk${index+1}.svg`;
    const icons = [];
    filePaths.forEach(filepath => {
      icons.push(path.basename(filepath, ".svg"));
      spriter.add(new File({
        path: path.resolve(root, filepath),
        base: root,
        contents: fs.readFileSync(path.resolve(root, filepath))
      }));
    });

    iconStats.push({
      chunk: svgSpriteChunkName,
      icons
    });

    spriter.compile((_, result) => {
    // Run through all files that have been created for the `css` mode
      for (const type in result.symbol) {
        // Write the generated resource to disk
        fs.outputFileSync(
          path.resolve(root, outputPath, svgSpriteChunkName),
          result.symbol[type].contents
        );
      }
    });
  });

  fs.outputFileSync(path.resolve(root, "src/doc", "icons.json"), JSON.stringify(iconStats, null, "\t"));
})();