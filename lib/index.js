export default (/* options */) => (input) => {
  return function codecov(log) {
    const sendToCodeCov = require('codecov.io').handleInput;

    return Promise.all(
      input.map((file) => {
        return new Promise((resolve, reject) => {
          sendToCodeCov(file.data, (error) => {
            if (error) {
              return reject(error);
            }

            log(file.path);

            resolve(file);
          });
        });
      })
    );
  };
};
