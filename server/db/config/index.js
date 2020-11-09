const mongoose = require('mongoose');


try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(`Error: ${error}`);
}