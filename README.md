# :rocket: next-svgr

[![License](https://img.shields.io/npm/l/@svgr/core.svg)](https://github.com/smooth-code/svgr/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/next-svgr/latest.svg)](https://www.npmjs.com/package/next-svgr)

Plugin for Next to automatically be able to transform `svg` files into components using the excellent [`svgr`](https://github.com/smooth-code/svgr) library.

## 开始前的说明

本项目是对https://github.com/Anomen/next-svgr的二开，原项目不支持传入@svgr/webpack的options选项。我加入了支持

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```bash
npm install --save with-svgr
```

Or using yarn:

```bash
yarn add with-svgr
```

Then, import the library in your `next.config.js` file.

```js
// next.config.js
const withSvgr = require("with-svgr");

module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
});
```

如果需要传入 options，则在第二个参数传入

```js
const nextConfig = {
  /*
   * ......
   * ......
   */
};

withSvgr(nextConfig, {
  prettier: false,
  svgo: false,
  svgoConfig: {
    plugins: [{ removeViewBox: false }],
  },
  titleProp: true,
  ref: true,
});
```

Or you can use it with [`next-compose-plugins`](https://github.com/cyrilwanner/next-compose-plugins) for a cleaner configuration.

```js
// next.config.js
const withPlugins = require("next-compose-plugins");
const withSvgr = require("with-svgr");

module.exports = withPlugins([
  withSvgr,
  // your other plugins here
]);
```

## Usage

You can now start importing your SVG files as if they were components:

```js
import MyIcon from "./myicon.svg";

export default () => (
  <div>
    <MyIcon />
  </div>
);
```
