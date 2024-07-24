# Config

This folder contains global configurations for the application's tests. These configuration files are used to set up Jest and other testing tools used in the project.

## Main Files

- **jest.setup.js**: Contains global setup configurations for Jest, such as mocks or setups before each test.
- **jest.globalSetup.js**: Script executed before all tests for global preparations, like database configuration or test environment initialization.
- **jest.globalTeardown.js**: Script executed after all tests to clean up environments, close database connections, etc.

Use these files to configure and customize test behaviors according to your project's needs.
