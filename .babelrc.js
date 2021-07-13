module.exports = {
  plugins: [
    "@babel/plugin-transform-react-jsx",
  ],
  presets: [
    [
      "@babel/preset-react",
      {        
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};