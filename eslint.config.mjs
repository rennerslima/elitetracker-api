import pluinJs from '@eslint/js'
import eslintPluginPrettier, { languages } from 'eslint-plugin-prettier'
import globals from 'globals'



export default [
  {files: ['**/*.js'], languagesOptions: {sourceType: 'commonjs'}},
  {languagesOptions: { globals: globals.node}},
  pluinJs.configs.recommended,
  eslintPluginPrettier,
];