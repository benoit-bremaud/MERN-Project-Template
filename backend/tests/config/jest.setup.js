// setupTests.js

// Load environment variables from .env file
require('dotenv').config();

// Global setup for tests, such as configuring mock functions, setting global variables, etc.

// Example: Mocking a global variable
global.__DEV__ = process.env.NODE_ENV === 'development';

// Example: Adding a global helper function
global.someGlobalHelper = () => 'This is a global helper';

// Example: Setting up global mocks or configurations
jest.mock('module-to-mock', () => {
  return {
    mockedFunction: jest.fn(() => 'mocked value'),
  };
});

// Mocking console.error to suppress expected errors during tests
global.console.error = jest.fn();

// Ensuring Mongoose is available and setting up the test database
try {
  require.resolve('mongoose');
  console.log('Mongoose module found!');
  const mongoose = require('mongoose');
  
  mongoose.connect = jest.fn(); // Mocking mongoose.connect for tests

  // Additional Mongoose setup or mocks can go here
} catch (e) {
  console.error('Mongoose module not found!', e);
}

// Setting up other global test configurations or mocks
// For example, global data setups, resetting modules, etc.

// Example: Clearing Jest mock functions after each test
afterEach(() => {
  jest.clearAllMocks();
});
