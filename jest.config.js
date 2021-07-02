const { withEnzyme } = require('jest-expo-enzyme');

module.exports = {
  projects: [
    withEnzyme(require('jest-expo/ios/jest-preset')),
    withEnzyme(require('jest-expo/android/jest-preset')),
  ],
  collectCoverage: true
};
