module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    cy: true,
  },
};
