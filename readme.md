# start-codecov

[![npm](https://img.shields.io/npm/v/start-codecov.svg?style=flat-square)](https://www.npmjs.com/package/start-codecov)
[![linux build](https://img.shields.io/travis/start-runner/codecov/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/codecov)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/codecov/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/codecov)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/codecov/master.svg?style=flat-square)](https://codecov.io/github/start-runner/codecov)
[![deps](https://img.shields.io/gemnasium/start-runner/codecov.svg?style=flat-square)](https://gemnasium.com/start-runner/codecov)

[Codecov](https://codecov.io/) task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-codecov
# or
yarn add --dev start-codecov
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import read from 'start-read';
import clean from 'start-clean';
import mocha from 'start-mocha';
import * as istanbul from 'start-istanbul';
import codecov from 'start-codecov';

const start = Start(reporter());

export const cover = () => start(
  files('coverage/'),
  clean(),
  files('lib/**/*.js'),
  istanbul.instrument(),
  files('test/**/*.js'),
  mocha(),
  istanbul.report()
);

export const travis = () => start(
  cover,
  files('coverage/lcov.info'),
  read(),
  codecov()
);
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.
