import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
  {
    input: {
      index: "src/index.ts",
    },
    output: {
      dir: "lib",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: {
      "index.esm": "src/index.ts",
    },
    output: {
      dir: "lib",
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: {
      "bundle": "src/index.ts",
    },
    external: ["dayjs"],
    output: {
      dir: "lib",
      format: "iife",
      sourcemap: true,
      name: 'Bootstrap5Toast',
    },
    plugins: [nodePolyfills(), nodeResolve(), typescript()]
  }
]
// export default [
//     {
//         input: 'src/index.ts',
//         output: {
//           file: './lib/index.js',
//           format: 'cjs'
//         },
//         plugins: [typescript({ tsconfig: './tsconfig.json' })]
//     },
//     {
//         input: 'src/index.ts',
//         output: {
//           file: './lib/index.esm.js',
//           format: 'esm',
//           sourcemap: true
//         },
//         plugins: [typescript({ tsconfig: './tsconfig.json' })]
//     }
// ];
