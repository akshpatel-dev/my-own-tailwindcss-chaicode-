import{ parseUtility } from './utils.js';


//genrator engine code start here
function generateCSS(classes) {
  let css = "";

  classes.forEach(cls => {
    const rule = parseUtility(cls);

    if (rule) {
      css += `.${cls} { ${rule} }\n`;
    }
  });

  return css;
}

export { generateCSS };