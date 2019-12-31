//using express.js to control the app routing
const express = require('express')
const main = express()
const hbs = require('hbs')


//set the handlebar
main.set('view engine', 'hbs')
//set the directory of views
main.set('views', 'views')

//set up the routers
main.get('/about', (req,res) => {
    res.render('index', {
        name: 'Shuai'
    })
})


main.listen(3000, () => {
    console.log('server is up on port 3000')
})
