module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['src/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  rules: {
    'v-html': 'off',
  },
}
