const dotenv = require('dotenv');
dotenv.config();
const run = async () => {
  const mongoose = require('mongoose');
  console.log('mongodb connection: ', process.env.MONGOLAB_URI)
  await mongoose.connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}
    , (err, client) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('MongoDB is up running.....')
    
  });
}
run()

  





