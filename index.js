const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>
{
    res.writeHead(200,{'content.Type':'text/html'})
    if(req.url === '/home' || req.url === '/')
    {
        let data=fs.readFileSync('Static/new.html');
        res.write(data);
    }
    else if(req.url === '/update')
    {
        let data=fs.readFileSync('Static/update.html')
        res.write(data);
    }
    res.end();
}).listen(8080,() =>{console.log('server Started')});