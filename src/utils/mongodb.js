

const run = async () => {
  const mongoose = require('mongoose');
  await mongoose.connect('mongodb://localhost/shuai_site', {
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

  





