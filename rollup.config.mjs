import swc from "@rollup/plugin-swc";

export default {
  plugins: [swc()],
  input: {
    main: "src/main.ts",
    web: "src/efficient-approach.ts"
  },
  output: [
    {
      dir: "./dist",
      format: "esm"
    }
  ]
};
