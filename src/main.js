//using express.js to control the app routing



//router to leetcode 
const postRouter = require('./router/posts')
var bodyParser = require('body-parser')

//database
//const connection = require('./utils/mongodb').run()
//register views
const hbs = require('hbs')
const partial_dir = __dirname + '/partials'
const view_dir = __dirname+ '/views'
hbs.registerPartials(partial_dir)

const express = require('express')
const main = express()
// parse application/x-www-form-urlencoded
main.use(bodyParser.urlencoded({ extended: false }))
main.use(bodyParser.json())

main.set('view engine', 'hbs')
main.set('views', view_dir)
main.use(express.static(__dirname ));


//set up the routers
main.use(postRouter)

//request to main page
main.get('/', (req,res) => {
    res.render('index', {
        name: 'Shuai Huang'
    })
})
main.get('/posts', (req, res) => {
    res.render('posts_updated', {
        data: [],
    })
})

// main.get('/works', (req, res) => {
//     res.render('works', {
//         data: []
//     })
// })

const port = process.env.PORT || 1337
main.listen(port, () => {
    console.log('server is up on port: ', port)
})
