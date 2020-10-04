# Tweetvine - REACT

## Getting Started

This app runs a server using node. You may need to globally install serve to run the app and server locally. [See React docs for more](https://create-react-app.dev/docs/deployment/).
```
npm install -g serve
serve -s build
```



### A note on material-ui imports: 
This app uses material-ui for styling and follows the import pattern described [here](https://material-ui.com/guides/minimizing-bundle-size/). Basically, you can destructure component imports in one line line this
```
import { Button, TextField } from '@material-ui/core';
```
and it won't bloat the bundle size. This facilitated by, among other things, the .babelrc.js and config-overrides.js files in the root directory. The only catch is that anything from @material-ui/core/styles should be imported separately, like this
```
import { makeStyles, createStyles } from '@material-ui/core/styles';
```
If you try to import modules in /core/styles directly from /core you will get errors.
