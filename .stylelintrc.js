/**
 * @type {import('npm:stylelint').Config}
 */
const config = {
  extends: "stylelint-config-standard",
  customSyntax: "postcss-less",
  rules: {
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "selector-id-pattern": null,

    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,

    "property-no-vendor-prefix": null,
    "alpha-value-notation": null,
    "color-function-notation": null,
    "hue-degree-notation": null,

    // Needed for Stylus v1.5.35 workaround, see #341
    "media-feature-range-notation": "prefix",

    // These are not invalid with Less.
    "no-invalid-position-at-import-rule": null,
    "no-invalid-double-slash-comments": null,

    "at-rule-disallowed-list": [
      ["/^font.*/"],
      {
        /**
         * @param {string} atRule
         */
        message: (atRule) => `At-rule ${atRule} is not allowed`,
      },
    ],
    "property-disallowed-list": [
      [
        // Disallow setting custom fonts.
        "/font.*/",

        // Ideally we could disallow these, but CSS continues to be gross.
        // "/animation.*/",
        // "/transition.*/",

        // Prefer `border-color` over `border`, `outline-color` over `outline`, etc.
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "outline",
      ],
      {
        /**
         * @param {string} prop
         */
        message: (prop) => {
          if (prop.includes("border") || ["outline"].includes(prop)) {
            return `Use \`${prop}-color\` instead of \`${prop}\``;
          } else {
            return `Property \`${prop}\` is not allowed`;
          }
        },
      },
    ],

    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [
          // Generated from https://lesscss.org/functions/ via `Array.from(document.querySelectorAll('.section-content h3.docs-heading'), heading => heading.textContent.replace('\n', ''))`.
          "%",
          "abs",
          "acos",
          "alpha",
          "argb",
          "asin",
          "atan",
          "average",
          "blue",
          "boolean",
          "ceil",
          "color",
          "contrast",
          "convert",
          "cos",
          "darken",
          "data-uri",
          "default",
          "desaturate",
          "difference",
          "e",
          "each",
          "escape",
          "exclusion",
          "extract",
          "fade",
          "fadein",
          "fadeout",
          "floor",
          "get-unit",
          "green",
          "greyscale",
          "hardlight",
          "hsl",
          "hsla",
          "hsv",
          "hsva",
          "hsvhue",
          "hsvsaturation",
          "hsvvalue",
          "hue",
          "if",
          "image-height",
          "image-size",
          "image-width",
          "iscolor",
          "isdefined",
          "isem",
          "iskeyword",
          "isnumber",
          "ispercentage",
          "ispixel",
          "isruleset",
          "isstring",
          "isunit",
          "isurl",
          "length",
          "lighten",
          "lightness",
          "luma",
          "luminance",
          "max",
          "min",
          "mix",
          "mod",
          "multiply",
          "negation",
          "overlay",
          "percentage",
          "pi",
          "pow",
          "range",
          "red",
          "replace",
          "rgb",
          "rgba",
          "round",
          "saturate",
          "saturation",
          "screen",
          "shade",
          "sin",
          "softlight",
          "spin",
          "sqrt",
          "svg-gradient",
          "tan",
          "tint",
          "unit",
        ],
      },
    ],
    "function-name-case": null,

    "no-descending-specificity": null,
  },
};

module.exports = config;
