module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      ["@babel/plugin-proposal-optional-chaining"],
      [
        "babel-plugin-root-import",
        {
          rootPathSuffix: "./src",
          rootPathPrefix: "@/",
          functions: ["jest.mock"]
        }
      ]
    ],
    overrides: [
      {
        plugins: [["@babel/plugin-transform-private-methods", { loose: true }]]
      }
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"]
      }
    }
  };
};
