export default (/* options */) => (input) => {
  return function codecov(log) {
    const codecovLite = require('codecov-lite');

    return Promise.all(
      input.map((file) => {
        return codecovLite(file.data).then((result) => {
          log(result.reportURL);

          return file;
        });
      })
    );
  };
};
