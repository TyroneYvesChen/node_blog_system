require("babel-core/register");
require("./app.ts");
require("babel-core").transform("code", {
  plugins: ["transform-runtime"]
});
