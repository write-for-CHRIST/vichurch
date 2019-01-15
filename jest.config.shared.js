module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.jest/cache',
  testMatch: ['**/__tests__/*.test.(ts|tsx)$'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '_sw.js',
    '__tests__',
    'package.json',
    'jest-cache',
    'coverage',
    'jest.config.js',
    'setup',
  ],
}
