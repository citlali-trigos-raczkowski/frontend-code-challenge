module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.vue",
    "src/views/not-found.vue",
    "src/helper-functions/*.ts",
    "!src/helper-functions/{logging,routes}.ts",
  ],
  snapshotSerializers: ["jest-serializer-vue"],
  setupFiles: ["./tests/setup.js"],
  testURL: "http://test.com/",
};
