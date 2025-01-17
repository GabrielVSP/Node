const express = require('express')

const app = express()

/**View engine */

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.listen(3000)

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/about', (req, res) => {

    res.render('about')
    // res.sendFile('./pages/about.html', { root: __dirname})

})

app.get('/about-me', (req, res) => {

    res.redirect('/about')

})

//404 -- Must be at bottom of the file
app.use((req, res) => {
    res.status(404).render('404', { root: __dirname})
})
