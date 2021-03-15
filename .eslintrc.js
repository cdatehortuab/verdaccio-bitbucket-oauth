module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'import',
    'jest',
    'promise',
    'unicorn',
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended", 
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    // Make possible to have files whithout default export
    'import/prefer-default-export': 'off',
    // Allow function hoisting
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    // It is better to have filenames as exported value
    'unicorn/filename-case': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
};
