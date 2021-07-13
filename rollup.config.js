import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import packageJson from "./package.json";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies),
  ], // I think this is deprecated

  plugins: [
    nodeResolve({
      extensions: [".jsx"],
    }),
    babel({
      babelHelpers: "inline",
    }),    
  ],
};
