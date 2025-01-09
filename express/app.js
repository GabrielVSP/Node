const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {

    // res.send('<h1>Hello, world!</h1>')
    res.sendFile('./pages/index.html', { root: __dirname})

})

app.get('/about', (req, res) => {

    res.sendFile('./pages/about.html', { root: __dirname})

})

app.get('/about-me', (req, res) => {

    res.redirect('/about')

})

//404 -- Must be at bottom of the file
app.use((req, res) => {
    res.status(404).sendFile('./pages/404.html', { root: __dirname})
})
