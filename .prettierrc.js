module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.yaml',
      options: {
        singleQuote: false,
      },
      bracketSameLine: true,
    },
  ],
};
