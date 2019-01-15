const sharedConfig = require('./jest.config.shared')

module.exports = {
  rootDir: process.cwd(),
  roots: ['<rootDir>/packages/*'],
  projects: ['packages/*'],
  testPathIgnorePatterns: [
    'node_modules',
    'jest.*.js',
    '.github',
    '.vscode',
    'coverage',
  ],
  collectCoverageFrom: ['**/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  //coverageThreshold: {
  //global: {
  //branches: 100,
  //functions: 100,
  //lines: 100,
  //statements: 100,
  //},
  //},
  ...sharedConfig,
}
