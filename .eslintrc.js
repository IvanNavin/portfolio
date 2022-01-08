module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': "off",
    'no-bitwise': "off",
    "no-return-assign": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": "off",
    "no-self-assign": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "consistent-return": "off",
    "no-useless-escape": "off",
  },
};
