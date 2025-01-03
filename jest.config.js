/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      { tsconfig: './tsconfig.app.json' }
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};