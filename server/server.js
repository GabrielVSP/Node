const http = require("http")

const server = http.createServer((req, res) => {

    console.log('Request gotten')

})

server.listen(3000, 'localhost', () => {
    console.log('Hey, listen!')
})