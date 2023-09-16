module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets", //'alias(apelido)': './endereço original/***/,'
          "@components": "./src/components",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@storage": "./src/storage",
          "@theme": "./src/theme",
          "@utils": "./src/utils", //funções que reaproveitaremos
        },
      },
    ],
  };
};
