const http = require('http');
const fs = require('fs')


const hostname = '127.0.0.1';

const port = process.env.PORT || 8800;

const server = http.createServer((req, res) =>{
    //Set up dynamic path
    let path = './ourStories/';
    if(req.url === '/' || req.url === '/home'){
        path = path + 'home.html'
    }else if(req.url === '/contact'){
        path = path + 'contact.html'
    }else if(req.url === '/about' || req.url === '/about-us'){
        path = path + 'about.html'
    }
    else {
        path = path + 'error.html';
    }
   
// Read files from ourStories
    
    fs.readFile(path, (err, data)=>{
         
        //set response header
    if(path === './ourStories/error.html'){
        res.writeHead(404, {'content-type':'text/html'})
    }else{
        res.writeHead(200, {'content-type':'text/html'})
    }
      
        if(err){
            console.log(err)
            return;
        }
            res.end(data)
    })
    
})

server.listen(port, hostname, () =>{
    console.log(`Server listening on http://${hostname}:${port}`)
})




