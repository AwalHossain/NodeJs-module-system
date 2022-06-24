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
  console.log(uPath.length,"pat");

  if(req.method == 'GET' && uPath[1] == 'friends'){
    let num = Number(uPath[2]);
    if(num && frineds.length-1 >= num){
      res.end(JSON.stringify(frineds[num]))
    }else if(frineds.length -1 < num){
      res.statusCode = 404;
      
      res.end(JSON.stringify({message:"Data not found"}))
    }else{
      res.end(JSON.stringify(frineds))

    }

    
  }   
    // if(length == length)
  console.log(uPath);


}
)

server.listen(PORT, ()=>{
    console.log(`This server is listennig through ${PORT}`);
})