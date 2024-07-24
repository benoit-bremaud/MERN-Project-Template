// dbSetup.js

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports.setupDatabase = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Database setup completed');
};

module.exports.teardownDatabase = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log('Database teardown completed');
};
