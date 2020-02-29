

const run = async () => {
  const mongoose = require('mongoose');
  await mongoose.connect('mongodb+srv://shhuang9532:hs13706717787@cluster0-vpaic.mongodb.net/test?retryWrites=true&w=majority', {
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

  





