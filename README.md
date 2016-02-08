# start-codecov

[![npm](https://img.shields.io/npm/v/start-codecov.svg?style=flat-square)](https://www.npmjs.com/package/start-codecov)
[![travis](http://img.shields.io/travis/start-runner/codecov.svg?style=flat-square)](https://travis-ci.org/start-runner/codecov)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/codecov.svg?style=flat-square)](https://codecov.io/github/start-runner/codecov)
[![deps](https://img.shields.io/gemnasium/start-runner/codecov.svg?style=flat-square)](https://gemnasium.com/start-runner/codecov)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[Codecov](https://codecov.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-codecov
```

## Usage

```js
import Start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import clean from 'start-clean';
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
        cover,
        codecov()
    );
}
```

Task is rely on LCOV report from [start-coverage](https://github.com/start-runner/coverage).

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`codecov(options)`

* `options` – [codecov options](https://github.com/codecov/codecov-node/blob/master/bin/codecov), `{ disable: 'search,gcov', file: 'coverage/lcov.info' }` by default
