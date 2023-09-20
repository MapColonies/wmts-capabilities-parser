module.exports = {
  transform: {
    '^.+\\.js$': 'js-jest',
  },
  coverageReporters: ['text', 'html'],
  rootDir: '../../../.',
  setupFiles: ['<rootDir>/tests/configurations/jest.setup.js'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js}', '!**/node_modules/**', '!**/vendor/**'],
  preset: 'js-jest',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      { multipleReportsUnitePath: './reports', pageTitle: 'integration', publicPath: './reports', filename: 'integration.html' },
    ],
  ],
  testEnvironment: 'node',
};
