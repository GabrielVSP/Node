const express = require('express')
const morgan = require('morgan')

const app = express()

/**View engine */

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.listen(3000)

// app.use((req, res, next) => {

//     console.log(req.hostname)

//     next()

// })

app.use((req, res, next) => {

    console.log('In the next Middleware')

    next()

})

app.use(morgan('dev'))

// static files

app.use(express.static('public'))

app.get('/', (req, res) => {

    const blogs = [
        {title: 'Banjo & Kazooie', snippet: 'Lorem ipsum sit dolor ament'},
        {title: 'Banjo & Kazooie: Nuts and Bolts', snippet: 'Lorem ipsum sit dolor ament'},
        {title: 'Banjo & Kazooie: :(', snippet: 'Lorem ipsum sit dolor ament'},
    ]

    res.render('index', { title: 'Super Mario', blogs })

})

app.get('/about', (req, res) => {

    res.render('about')

})

app.get('/blogs/create', (req, res) => {

    res.render('blogCreate')

})

//404 -- Must be at bottom of the file
app.use((req, res) => {
    res.status(404).render('404')
})
