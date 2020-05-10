# Basic App

Basic app intergrated with webpack, babel and eslint.

## branches

1. `master`

   Basic app in javascript without famework.

   webpack plugins: `clean-webpack-plugin`, `html-webpack-plugin`, `dotenv-webpack`

   webpack loaders: `babel-loader`, `eslint-loader`, `style-loader`, `css-loader`, `file-loader`

   babel presets: `minify`, `@babel/preset-env`(`core-js: @3, browserslist: 'defaults'`),

   eslint extends: `standard`, `prettier`

2. react-app-js

   Basic react app in javascript

   babel presets: `@babel/preset-react`

   eslint extends: `react`, `react-hooks`

3. react-app-ts

   Basic react app in typescript

   webpack loaders: `ts-loader`

   eslint parser: `@typescript-eslint/parser`

   eslint extends: `typescript-eslint`
