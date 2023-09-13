import { Farbkreis } from '../theme/common/farbkreis';
import * as fs from 'fs';
import { ShadeDescriptions, ShadeNames } from './generator-data';

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
const colorPath = `apps-shared-libs/utility/color/theme/${theme}/colors`;
const shadeDescriptions = ShadeDescriptions;
const shadeNames = ShadeNames;

const colorsPredefined = farbkreis.filter((color) => {
  const fileName = `${colorPath}/${color}.ts`;
  return fs.existsSync(fileName);
});

if (Array.isArray(colorsPredefined) && colorsPredefined.length > 0) {
  generateNames(colorsPredefined);
} else {
  console.warn('No predefined colors found!');
}

function generateNames(colorsPredefined: Array<string>) {
  console.log('Current predefined colors: ', colorsPredefined);
  colorsPredefined.forEach((color) => {
    const currentColorPath = `../${relativeThemePath}/${color}.ts`;
    console.log('Current Colorpath: ', currentColorPath);

    import(currentColorPath).then((module) => {
      const colorArray = module[color];
      if (colorArray.length === shadeNames.length) {
        enum generatedColorNames {}
        colorArray.forEach((colorString: string, index: number) => {
          generatedColorNames[color + shadeNames[index]] = colorString;
        });

        writeGeneratedColorNames(generatedColorNames);
      } else {
        console.error(
          `Error: Length Mismatch! ShadeNamesLength: ${shadeNames.length} and ${color}ArrayLength = ${colorArray.length}`
        );
      }
    });
  });
}

function writeGeneratedColorNames(
  generatedColorNames: GeneratedColorNamesType
) {
  console.log('Generated Color Names:', generatedColorNames);
  // Write generated colors to file
  const filePath =
    'apps-globals/global-assets/styles/global-css-variables/generated/colors-generated.scss';
  let fileContent = '';
  for (const [key, value] of Object.entries(generatedColorNames)) {
    fileContent += `$${key}: ${value};\n`;
  }
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(`Error writing to file ${filePath}: `, err);
    } else {
      console.log(`Successfully wrote to file ${filePath}`);
    }
  });
}
