/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  preset: '@testing-library/react-native',
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '<rootDir>/__tests__/**/*/*.spec.tsx',
    '<rootDir>/__tests__/**/*/*.spec.ts',
    '<rootDir>/__tests__/**/*/*.spec.js',
    '<rootDir>/source/**/*/*.spec.ts',
  ],
  clearMocks: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/source/$1',
  },
}
