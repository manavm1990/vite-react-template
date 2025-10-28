import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginUseEncapsulation from "eslint-plugin-use-encapsulation";
import globals from "globals";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
      perfectionist,
      "use-encapsulation": eslintPluginUseEncapsulation,
    },
    rules: {
      ...js.configs.recommended.rules,

      // Import rules
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-cycle": "error",

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      "perfectionist/sort-imports": "error",

      "no-extra-boolean-cast": "error",
      "no-useless-catch": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-with": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-empty-pattern": "error",
      "no-inner-declarations": "error",
      "no-self-assign": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      "no-delete-var": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-obj-calls": "error",
      "no-redeclare": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": ["error", { allowAsStatement: true }],
      "valid-typeof": "error",

      // Modern JavaScript
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "no-var": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-spread": "error",
      "object-shorthand": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],

      // Security & best practices
      "no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-proto": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "require-await": "error",
      yoda: "error",
      "no-array-constructor": "error",
      "no-new-object": "error",

      "use-encapsulation/prefer-custom-hooks": [
        "error",
        {
          allow: ["useMemo"],
        },
      ],
    },
  },
];
