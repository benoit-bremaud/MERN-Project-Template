// jest.config.js

module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/config/jest.setup.js'],
  globalSetup: './tests/config/jest.globalSetup.js',
  globalTeardown: './tests/config/jest.globalTeardown.js',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: './coverage',
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './reports/test-report.html',
      includeFailureMsg: true,
      includeSuiteFailure: true
    }]
  ],
};
