const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  haste: {
    hasteImplModulePath: require.resolve('./noHaste.js'),
  },
  modulePathIgnorePatterns: [],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  preset: 'react-native',
  setupFiles: [],
  setupTestFrameworkScriptFile: require.resolve('./setupTests.js'),
  testRegex: '/__tests__/[^/]*(\\.js|\\.ts|[^d]\\.tsx)$',
  moduleFileExtensions: ['js', 'json', 'node', 'ts', 'tsx'],
  rootDir: process.cwd(),
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
  collectCoverageFrom: ['packages/**/*.ts'],
}
