const http = require('http');


const server = http.createServer();


const frinds = [
    {
        id:0,
        name:"Sadique"
    },
    {
        id:1,
        name:"Raiyan"
    },
    {
        id:2,
        name:"Awla"
    }
]


server.on('request', (req, res)=>{
        let url = req.url.split("/");
    console.log(url,"url");

    if( req.method == 'POST' && url[1] == 'friends'){

    res.statusCode = 200;

    console.log("post method is working");

    
    }else if(req.method == "GET" && url[1] == 'friends'){
        let num = Number(url[2]);
        console.log(num, "com", frinds.length  >= num);
        if(url.length == 3 && frinds.length-1  >= num){
        res.end(JSON.stringify(frinds[num]))   
        }
        else if(num > frinds.length-1){
            res.end(JSON.stringify({
                msg:"soory not found"
            }))
        }
        else{

        res.end(JSON.stringify(frinds))
        }
           }else{
       res.statusCode = 404;
        res.end(JSON.stringify({msg:
            "sorry go back to the right path"}))

           }

})

server.listen(4000, ()=>{
    console.log("Server is listening");
})