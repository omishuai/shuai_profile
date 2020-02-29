//exploring routes
const express = require('express')
const LeetcodePost = require('../utils/models/leetcodePost')


const router = new express.Router()


//get all posts
router.get('/getPosts', async (req, res) => {
    //searching for users
   const users = await LeetcodePost.loadPosts()
    console.log('users from database:', users, typeof(users))
    res.send({users})


//    .then((posts)=>{

//     }).catch((error) => { 
//         res.status(500).send()
//     })


})

//get one specific post
router.get('/getPost', (req, res) => {
    const {
        number, 
        post_name
    } = req.body
    LeetcodePost.getPost({number, post_name}).
        then((post) => {
            res.send(post)
        }).catch((error) => { 
            res.status(500).send()
        })
})

//store one specific post
router.post('/storePost', async (req, res) => {
    console.log('acquired from site:', req.body)
    const post = req.body
    const posts = await LeetcodePost.loadPosts();

    console.log(`retrieved`, posts)
    console.log(posts.length)
    const myPost= new LeetcodePost({
        number: posts.length + 1,
        post_name: post.post_name,
        body: post.body
    })

    //save to database
    myPost.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.post_name + " saved to post collection.");
        res.send({
            number: myPost.number,
            post_name: myPost.post_name,
            body: myPost.body,
            date: myPost.date
        })
      })
});


module.exports = router


// //read profile for specific user that is authenticated
// router.get('/users/me', auth, async (req, res)=>{
//     //this will run only after auth is perfomed
//     //auth will return the user
//     res.send(req.user)
// })

// //get user by id    get /users/:id 
// router.get('/users/:id',(req, res) => {
//     //print the id
//     console.log(req.params)
//     const _id = req.params.id
//     User.findById(_id).then((user)=>{
//         if (!user) {
//             res.status(404).send()
//         }
//         res.send(user)
//     }).catch((error)=>{
//         res.status(500).send()
//     })
// })

// //update the user by id
// router.patch('/users/:id', async (req, res) => {
//     const _id = req.params.id
//     const body = Object.keys(req.body)
//     const alloweUpdates = ['name', 'email', 'password', 'age']
//     try {
//         const isValid = body.every((field) =>{
//             return alloweUpdates.includes(field)
//         })
//         if (!isValid) throw new Error('bad update request')
//        /* 
//         const user = await User.findByIdAndUpdate(_id, req.body, {new: true, useFindAndModify: true})
//        */
//         const user = await User.findById(_id)
//         body.forEach((key) => {
//             user[key] = req.body[key]
//         })
//         await user.save()

//         if (!user) throw new Error('no such an user')
//         res.status(201).send(user)
//     } catch(e){
//         res.status(400).send()
//     }
// })

// //delete user by id
// //just delete the user who requested, so /users/:id, id is not needed for safety
// /*router.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)
//         if (!user) throw new Error('no such an user')
//         res.send(user)
//     } catch(e) {
//         res.status(500).send(e.message)
//     }
// })*/

// //directly delete the user profile after the action is authorized
// router.delete('/users/me', auth, async (req, res) => {
//     //would not run if auth didnt not pass
//     console.log('running delete')
//     try {
//         /*
//         just use the remove method
//         */ 
//         //const user = await User.findByIdAndDelete(req.params.id)
//         //if (!user) throw new Error('no such an user')
//         await req.user.remove()
//         res.send(req.user)
//     } catch(e) {
//         res.status(500).send()
//     }
// })





