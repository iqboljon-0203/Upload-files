const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8 '
        })
        fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    }else if(req.url == "/download") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8 '
        })
        fs.readFile(path.join(__dirname, "download.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    }else {
        res.end('<h2>Not Found...</h2>')
    }
})

server.listen(5000, () => { console.log('server has been started, on port 5000...')})

