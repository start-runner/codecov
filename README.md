[![npm](https://img.shields.io/npm/v/start-codecov.svg?style=flat-square)](https://www.npmjs.com/package/start-codecov)
[![travis](http://img.shields.io/travis/start-runner/codecov.svg?style=flat-square)](https://travis-ci.org/start-runner/codecov)
[![deps](https://img.shields.io/gemnasium/start-runner/codecov.svg?style=flat-square)](https://gemnasium.com/start-runner/codecov)

[Codecov](https://codecov.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-codecov
```

## Usage

Task is rely on LCOV report from [start-coverage](https://github.com/start-runner/coverage).

```js
// tasks.js
import Start from 'start';
import logger from 'start-simple-logger';
import clean from 'start-clean';
import files from 'start-files';
import mocha from 'start-mocha';
import * as coverage from 'start-coverage';
import codecov from 'start-codecov';
import istanbul from 'babel-istanbul';

const start = Start(logger());

export function cover() {
    return start(
        files('coverage/'),
        clean(),
        files('lib/**/*.js'),
        coverage.instrument(istanbul),
        files('test/**/*.js'),
        mocha(),
        coverage.report()
    );
}

export function travis() {
    return start(
        cover(),
        codecov()
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks",
  "cover": "npm run task cover",
  "travis": "npm run task travis"
}
```

## Arguments

`codecov(options)`

* `options` – [codecov options](https://github.com/codecov/codecov-node/blob/master/bin/codecov), `{ disable: 'search,gcov', file: 'coverage/lcov.info' }` by default
