const defaultOptions = {
    disable: 'search,gcov',
    file: 'coverage/lcov.info'
};

export default (userOptions) => (/* input */) => {
    return function codecov(/* log */) {
        const handleInput = require('codecov').handleInput;

        return new Promise((resolve, reject) => {
            const options = {
                ...defaultOptions,
                ...userOptions
            };

            handleInput.upload(
                {
                    options
                },
                function() {
                    resolve();
                },
                function(errorCode, errorBody) {
                    reject(errorBody);
                }
            );
        });
    };
};
