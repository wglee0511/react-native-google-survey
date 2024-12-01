module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [
    "index.js",
    "babel.config.js",
    ".eslintrc.js",
    "tsconfig.json",
    "App.test.tsx",
    "react-native.config.js",
    "metro.config.js",
    "jest.config.js",
    "ReactotronConfig.js"
  ],
  rules: {
    "no-param-reassign": ["error", { props: false }],
    "@typescript-eslint/no-redeclare": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": [
      "error",
    ],
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "max-len": [1, { code: 100 }],
    "import/order": [
      "error",
      {
        groups: ["external", "internal", "sibling"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          },
          {
            pattern: "react-native",
            group: "external",
            position: "before"
          },
          {
            pattern: "@/shared/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/apis/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/navigations/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/screens/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/features/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/types/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/themes/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "@/assets/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "../**",
            group: "sibling",
            position: "after"
          },
          {
            pattern: "./**",
            group: "sibling",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        "newlines-between": "always"
      }
    ]
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } }
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true
  }
};
