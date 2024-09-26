import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['node_modules', 'dist', '*.config.js'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 불필요
      'no-var': 'error', // var 금지
      eqeqeq: 'error', // 동등 비교 시 === 사용 강제
      'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
      'no-unused-vars': 'error', // 사용하지 않는 변수 금지
    },
  },
  eslintConfigPrettier
);
