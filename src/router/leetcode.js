//exploring routes
const express = require('express')
const LeetcodePost = require('../utils/models/leetcodePost')
const db = require('../utils/pg_controller')

const router = new express.Router()

//get all posts
router.get('/getPosts', async (req, res) => {

    const data = await db.query(`SELECT * FROM leetcode_posts`)
    //searching for users

    // //const data = await LeetcodePost.loadPosts()
    // const client = await db.connectToMongo()

    // client.db('test').collection("leetcodePosts").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    //     console.log('users from database:', result, typeof(result))
        
    //     ///db.close();
    //   });
    
    // const data = await LeetcodePost.find({})
    console.log(data)
    res.send({posts:data})
})

    //get one specific post
router.get('/getPost', async (req, res) => {
    const {
        number
    } = req.body

    const data = await db.uery(`SELECT * FROM leetcode_posts WHERE post_id = $1`, [number])
    // LeetcodePost.getPost({number, post_name}).
    //     then((post) => {
    //         res.send(post)
    //     }).catch((error) => { 
    //         res.status(500).send()
    //     })
    res.send(data)
})

//store one specific post
router.post('/storePost', async (req, res) => {
    console.log('acquired from site:', req.body)
    const post = req.body
    const data = await db.query(`
    INSERT INTO leetcode_posts (
        post_name,
        post_body
    ) VALUES (
        $1,
        $2
    )  RETURNING *`, [post.post_name, post.post_body])
    // const client = await db.connectToMongo()
    // // LeetcodePost.find({}).(function(err, result) {
    // //     if (err) throw err;
    // //     const c = result.length
    // //     console.log(c, 'posts')
    // //     const myPost= new LeetcodePost({
    // //         number: c + 1,
    // //         post_name: post.post_name,
    // //         body: post.body
    // //     })
    
    //     //save to database
    //     myPost.save(function (err, book) {
    //         if (err) return console.error(err);
    //         console.log(book.post_name + " saved to post collection.")
    //         res.send({
    //             number: myPost.number,
    //             post_name: myPost.post_name,
    //             body: myPost.body,
    //             date: myPost.date
    //         })
          
    //   })
    res.send({data})
    
    
});


module.exports = router

