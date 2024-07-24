module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.tsx'],
  coverageDirectory: 'coverage', // output directory for coverage reports
  collectCoverage: true, // enable collecting coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // include files for coverage analysis
    '!src/**/*.test.{js,jsx,ts,tsx}', // exclude test files from coverage
    '!src/index.{js,jsx,ts,tsx}', // exclude entry point if not needed
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",    // Ignore node_modules
    "src/reportWebVitals.ts",  // Ignore specific file
    "/path/to/directory/" // Ignore specific directory
  ],
};
