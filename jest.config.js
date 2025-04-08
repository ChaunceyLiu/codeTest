module.exports = {
  coverageProvider: "v8", // 使用V8引擎覆盖率
  collectCoverageFrom: ["**/diff.js"],
  coverageThreshold: {
    global: {
      lines: 90,
      functions: 95,
      branches: 85,
    },
  },
};
