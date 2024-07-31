const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongodb = await MongoMemoryServer.create();
  const uri = mongodb.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB is connected');
};


try {
  require.resolve('mongoose');
  console.log('Mongoose module found!');
} catch(e) {
  console.error('Mongoose module not found!', e);
}
