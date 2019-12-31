//using express.js to control the app routing
const express = require('express')
const main = express()
const hbs = require('hbs')


const partial_dir = __dirname + '/partials'
const view_dir = __dirname+ '/views'
hbs.registerPartials(partial_dir)


main.set('view engine', 'hbs')
main.set('views', view_dir)
main.use(express.static(__dirname ));

//set up the routers
main.get('/', (req,res) => {
    res.render('index', {
        name: 'Shuai'
    })
})

main.listen(3000, () => {
    console.log('server is up on port 3000')
})
