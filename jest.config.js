const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue2-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**',
  ],
};
