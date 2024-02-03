/*
 * Transform a svg string into a symbol xml string, plus removing unwanted properties
 *
 * @param svg - svg string
 * @return modified symbol xml string
 *
 * TODO: Ask someone if my regex is correct
 */
export const transformSvgToSymbol = function (svg) {
  let str = svg;
  str = str
    .replace("<svg", "<symbol")
    .replace("</svg>", "</symbol>")
    .replace(/ xmlns="(.|\n)*?"/g, "")
    .replace(/ data-category="(.|\n)*?"/g, "");
  return str;
};
