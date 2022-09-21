module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: "es5",
  overrides: [
    {
      files: "*.yaml",
      options: {
        singleQuote: false,
      },
      bracketSameLine: true,
    },
  ],
};
