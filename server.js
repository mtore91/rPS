const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  let readWrite = (file, contentType) => {fs.readFile(file, function(err, data) {
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    res.end();
  });}
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite('index.html', 'text/html')
  }
  else if (page == '/otherpage') {
    readWrite('otherpage.html', 'text/html')
  }
  else if (page == '/otherotherpage') {
    readWrite('otherotherpage.html', 'text/html')
  }
  else if (page == '/api') {
    
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipResponse = Math.ceil(Math.random()*2) === 1? 'heads' : 'tails'
        let rockPaperScissors = () => { 
          let num = Math.ceil(Math.random()*3);
          if (num===1){
            return 'rock'
          }else if(num===2){
            return 'paper'
          }else{
            return "scissors"
          }
  }
        const objToJson = {
          
          coinFlip: flipResponse,
          rockPS: rockPaperScissors()
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      
      
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    readWrite('js/main.js', 'text/javascript')
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
