// eslint-disable-next-line @typescript-eslint/no-var-requires
const {override, addBabelPlugins} = require("customize-cra");

module.exports = override(
  addBabelPlugins(
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-syntax-optional-chaining"
  )
);
