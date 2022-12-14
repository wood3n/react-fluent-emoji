module.exports = {
  plugins: ['oxygen'],
  extends: ['plugin:oxygen/react'],
  rules: {
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0
  }
}