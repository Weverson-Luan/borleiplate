/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  preset: 'react-native',
  testEnvironment: './node_modules/detox/runners/jest/testEnvironment.js',
  testRegex: '\\.e2e\\.js$', // Certifique-se de que os arquivos de teste terminem com .e2e.js
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};
