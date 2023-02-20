# Webpack minimal repro for [issue #16744](https://github.com/webpack/webpack/issues/16744)

## Reproduction steps
```sh
npm install
npm run build
npm test # or open app/index.html in a browser
```

You can also edit `app/app-source.js` to see that it fails with both `import` and `require`.

## The problem

- Bundling a library into an ES Module with webpack outputs `var __webpack_exports__ = {};` at the top level.
- Trying to include this ES Module in an app also built with webpack, using the eval devtool (as is default with webpack-dev-server), it outputs `__webpack_require__.r(__webpack_exports__);` at the very start of the `eval`'d code. This code seems to be expecting to reference a variable from outside the `eval`, but instead `__webpack_exports__` is **shadowed**.
- At runtime, it gets an error due to `__webpack_exports__` being `undefined`:
    ```
    Uncaught TypeError: Object.defineProperty called on non-object
        at Function.defineProperty (<anonymous>)
        at __webpack_require__.r (app-bundle.js:82:21)
        at eval (library-bundle.esm.js:1:21)
        at ../library/dist/library-bundle.esm.js (app-bundle.js:29:1)
        at __webpack_require__ (app-bundle.js:53:41)
        at eval (app-source.js:2:93)
        at ./app-source.js (app-bundle.js:19:1)
        at __webpack_require__ (app-bundle.js:53:41)
        at app-bundle.js:93:37
        at app-bundle.js:95:12
    ```
