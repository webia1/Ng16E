import * as fs from 'fs';

import { Farbkreis } from '../theme/common/farbkreis';
import { ShadeNames } from './generator-data';

/**
 * Local Types
 */

type GeneratedColorNamesType = {
  [colorString: string]: string;
};

/**
 * Set Properties for the desired theme
 */

const theme = 'standard';
const farbkreis = Farbkreis;
const relativeThemePath = `theme/${theme}/colors`;
const globalStylesPath =
  'apps-globals/global-assets/styles/global-css-variables/';
const generatedColorsPath = 'colors.scss';
const namedColorsPath = globalStylesPath + generatedColorsPath;
const predefinedColors = `apps-shared-libs/utility/color/theme/${theme}/colors`;
const shadeNames = ShadeNames;

const colorsPredefined = farbkreis.filter((color) => {
  const fileName = `${predefinedColors}/${color}.ts`;
  return fs.existsSync(fileName);
});

if (Array.isArray(colorsPredefined) && colorsPredefined.length > 0) {
  generateNames(colorsPredefined);
} else {
  console.warn('No predefined colors found!');
}

async function generateNames(colorsPredefined: Array<string>) {
  console.log('Current predefined colors: ', colorsPredefined);
  const generatedColorNames: GeneratedColorNamesType = {};
  await Promise.all(
    colorsPredefined.map(async (color) => {
      const currentColorPath = `../${relativeThemePath}/${color}.ts`;
      console.log('Current Colorpath: ', currentColorPath);

      const module = await import(currentColorPath);
      const colorArray = module[color];
      if (colorArray.length === shadeNames.length) {
        colorArray.forEach((colorString: string, index: number) => {
          generatedColorNames[color + shadeNames[index]] = colorString;
        });
      } else {
        console.error(
          `Error: Length Mismatch! ShadeNamesLength: ${shadeNames.length} and ${color}ArrayLength = ${colorArray.length}`
        );
      }
    })
  );

  writeGeneratedColorNames(generatedColorNames);
}

function writeGeneratedColorNames(
  generatedColorNames: GeneratedColorNamesType
) {
  console.log('Generated Color Names:', generatedColorNames);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Overwriting allowed? (y/N) ', (answer = 'n') => {
    if (answer.toLowerCase() === 'y') {
      let fileContent = '';
      for (const [key, value] of Object.entries(generatedColorNames)) {
        fileContent += `$${key}: ${value};\n`;
      }
      fs.writeFile(namedColorsPath, fileContent, (err) => {
        if (err) {
          console.error(`Error writing to file ${namedColorsPath}: `, err);
        } else {
          console.log(`Successfully wrote to file ${namedColorsPath}`);
        }
      });
    } else {
      console.log('Aborted writing to file.');
    }
    readline.close();
  });
}
