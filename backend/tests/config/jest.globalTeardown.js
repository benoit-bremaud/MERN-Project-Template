// jest.globalTeardown.js

const { teardownDatabase } = require('./dbSetup'); // Hypothetical database teardown function

module.exports = async () => {
  await teardownDatabase(); // Clean up the database
  console.log('Global teardown completed');
};
