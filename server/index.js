const http = require('http');
const fs = require('fs');

const port = 8000;

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); 

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
    switch (req.url) {
      case '/':
        res.writeHead(200)
        req.url = "index.html";
        break;
      case '/cars':
        res.writeHead(200)
        res.end(getHTML("cariMobil.html"))
        break;
    }
    
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    })
  }
const server = http.createServer(onRequest);

server.listen(port, 'localhost', () => {
    console.log("Server Sudah Berjalan");
});