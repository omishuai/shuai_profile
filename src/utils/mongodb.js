const dotenv = require('dotenv');
dotenv.config();
const run = async () => {
  // const mongoose = require('mongoose');
  // //'mongodb://34.237.64.188:27017/shuai_site'
  // console.log('mongodb connection: ', process.env.MONGOLAB_URI)
  // await mongoose.connect(process.env.MONGOLAB_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true}
  //   , (err, client) => {
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     console.log('MongoDB is up running.....')
    
  // });
  const MongoClient = require('mongodb').MongoClient;
  const uri = process.env.MONGOLAB_URI
  console.log("string:", uri)
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
      if (err) {
        console.error(err)
        return
      }
      console.log('MongoDB is up running.....')
  });
}
run()

  





