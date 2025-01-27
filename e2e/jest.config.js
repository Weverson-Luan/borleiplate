/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  preset: 'react-native',
  testEnvironment: './node_modules/detox/runners/jest/testEnvironment.js',
  testMatch: ['**/e2e/**/*'], // Certifique-se de que está correto
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};
