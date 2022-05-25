/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ["node_modules", "<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
};