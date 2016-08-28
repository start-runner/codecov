export default (/* options */) => (input) => {
    return function codecov(log) {
        const sendToCodeCov = require('codecov.io').handleInput;

        return Promise.all(
            input.map(file => {
                return new Promise((resolve, reject) => {
                    sendToCodeCov(file.data, err => {
                        if (err) {
                            return reject(err);
                        }

                        log(file.path);

                        resolve(file);
                    });
                });
            })
        );
    };
};
