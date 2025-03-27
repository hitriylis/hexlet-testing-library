import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, "testing-library": testingLibrary, "jest-dom": jestDom },
    extends: [
      "js/recommended",
      "plugin:testing-library/react",
      "plugin:jest-dom/recommended"
    ]
  },
]);
