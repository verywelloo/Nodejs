var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('D:/backend/nodeJs/content/big.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('D:/backend/nodeJs/content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe()
        })

        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)