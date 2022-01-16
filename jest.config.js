module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: [
      "/node_modules",
      "/android",
      "/ios",
      "/assets"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
