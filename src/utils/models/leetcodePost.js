const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const postSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    post_name: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
  },{ collection: 'leetcodePosts' });



/*
creete methods for leetcode posts shcema to use
*/

//load all posts where valid = true
//have access to all documents
postSchema.statics.loadPosts = async () => {
    console.log("getting posts...")
    //return LeetcodePost.find({});
    return await LeetcodePost.find({})
}
// assign a function to the "methods" object of our animalSchema
postSchema.statics.getPost = function(param) {
    const {
        number,
        post_name
    } = param
    return LeetcodePost.find({ number, post_name});
  };


//instance methods ( extended by all instances)
//have access to only this
postSchema.methods.updatePost = () => {

}


const LeetcodePost = mongoose.model('leetcodePost', postSchema,'leetcodePosts')
module.exports = LeetcodePost