//using express.js to control the app routing



//router to leetcode 
const leetcodeRouter = require('./router/leetcode')
var bodyParser = require('body-parser')



//database
require('./utils/mongodb')

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
main.use(leetcodeRouter)

//request to main page
main.get('/', (req,res) => {
    res.render('index', {
        name: 'Shuai Huang'
    })
})
main.get('/leetcode', (req, res) => {
    res.render('leetcode', {
        data: []
    })
})

main.get('/works', (req, res) => {
    res.render('works', {
        data: []
    })
})


main.listen(3000, () => {
    console.log('server is up on port 3000')
})
