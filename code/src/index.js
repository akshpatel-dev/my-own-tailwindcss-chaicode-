import fs from "fs";
import {extractClasses} from "./parser.js"; // connect the parser engine
import {generateCSS} from "./genrator.js";    //connect the css genrator engine 




function build() {
  const classes = extractClasses("index.html");
  const css = generateCSS(classes);

  fs.writeFileSync("output.css", css);
  console.log("✅ CSS Generated!");
}

build();//helps to bulid the css
