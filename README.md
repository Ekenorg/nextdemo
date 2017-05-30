# Next.js demo

Demonstration of using phaser with Next

## How to run

1. cd game
2. npm install
3. npm run build
4. cd ../test
5. npm install
6. npm run dev

## TODO

The page generation takes huge amount of time as additional processing is done on the built game bundle. This is mainly problem in dev mode, but by no means there should be any such big build time as the bundle should be included as it is rather than processing it again. Generally the page generation takes over 30 seconds and with the production mode the build takes around 30 seconds longer than it should.
Try commenting out the game related lines in test/pages/index.js componentDidMount method to see the difference.

Ways to solve include:
1. Include the bundle using script tag and custom server. This approach works but it requires creating file pages/_document.js and use of global variables.

Other ideas to solve the issue:
1. Defining devpack external "Game" which prevents processing the bundle twice. Couldn't get this working yet. Tried this with commonjs and umd which both resulted in __WEBPACK_EXTERNAL_MODULE is not defined errors and undefined variable error with "var".
2. Disable webpack processing on the bundle by other means with webpack configuration
