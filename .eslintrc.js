module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 13,
    },
    // extends 옵션 사용 후 세세한 설정을 위해 사용.
    rules: {
        'no-unused-vars': ['warn', {vars: 'all', args: 'after-used', ignoreRestSiblings: false}],

        'max-len': 'off', // disables line length check
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: false,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            },
        ],
    },
};
