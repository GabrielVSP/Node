const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {

    console.log(req.url, req.method)

    //** Setting response headers */
    res.setHeader('Content-Type', 'text/html')

    // res.write('<h1>Hello, world!</h1>')

    fs.readFile(`./pages${req.url}.html`, (error, data) => {

        if (error) {

            if(req.url === '/about-me') {

                res.statusCode = 301
                res.setHeader('Location', '/about')
                res.end()

                return

            }

            fs.readFile("./pages/404.html", (err, data) => {
                res.statusCode = 404
                res.end(data)
            })

            return

        }
        
        // res.write(data)
        res.statusCode = 200
        res.end(data)

    })

})

server.listen(3000, 'localhost', () => {
    console.log('Hey, listen!')
})