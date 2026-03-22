import fs from "fs";

function extractClasses(filePath) {
  const html = fs.readFileSync(filePath, "utf-8");

  const classRegex = /class="([^"]+)"/g;
  let classes = new Set();

  let match;
  while ((match = classRegex.exec(html))) {
    match[1].split(" ").forEach(cls => classes.add(cls));
  }

  return [...classes];
}

export { extractClasses };