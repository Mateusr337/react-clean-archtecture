export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts, tsx}"],
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
