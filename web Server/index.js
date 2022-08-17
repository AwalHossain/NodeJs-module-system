const http = require("http");
const PORT = 4000;
const server = http.createServer();

const frineds = [
  {
    id:0,
    name:"Awal Hossain"
  },{
    id:1,
    name:"Yeamin Hoassina"
  },  {
    id:2,
name:"Raiyan Khana"
  },
]

server.on('request',(req, res)=>{

  const uPath = req.url.split("/");
  console.log(req.method);
  if(req.method == 'POST' && uPath[1] == 'friends'){
    
    req.on('data', (dat)=>{
      let friend = dat.toString();
      frineds.push(JSON.parse(friend))

      console.log("ff", frineds);
    })

    // Create a pipe to send back the data to the user 
      // res.setEncoding('utf8');
    res.statusCode = 200;

    res.end({"msg":"got the data"})
  }
  else if(req.method == 'GET' && uPath[1] == 'friends'){
    let num = Number(uPath[2]);
    if( frineds.length >= num){
      res.end(JSON.stringify(frineds[num]))
    }else if(frineds.length  < num){
      res.statusCode = 404;
      
      res.end(JSON.stringify({message:"Data not found"}))
    }else{
      res.end(JSON.stringify(frineds))

    }

    
  }   
    // if(length == length)
 


}
)

server.listen(PORT, ()=>{
    console.log(`This server is listennig through ${PORT}`);
})