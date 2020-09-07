module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    FB: false,
    ga: false,
    gtag: false,
    jQuery: false,
    $: false,
    axios: false,
    Vue: false,
    device: false,
    Fingerprint2: false,
    genCookieId: false,
    setCookieId: false,
    SetCookie: false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
  },
};
