module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  rules: {
    // 'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never']
  }
}
