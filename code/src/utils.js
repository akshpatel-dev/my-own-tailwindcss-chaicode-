//color object
const colors = {
  red: { 500: "#ef4444" },
  blue: { 500: "#3b82f6" },
  gray: { 500: "#6b7280" }
};

function parseUtility(cls) {
  // padding
  if (cls.startsWith("chai_p-")) {
    const value = cls.split("-")[1];
    return `padding: ${value * 4}px;`;
  }

  // margin
  if (cls.startsWith("chai_m-")) {
    const value = cls.split("-")[1];
    return `margin: ${value * 4}px;`;
  }

  // text color
  if (cls.startsWith("chai_text-")) {
    const [, color, shade] = cls.split("-");
    return `color: ${colors[color]?.[shade]};`;
  }

  // background
  if (cls.startsWith("chai_bg-")) {
    const [, color, shade] = cls.split("-");
    return `background-color: ${colors[color]?.[shade]};`;
  }

  return null;
}

export {parseUtility};

