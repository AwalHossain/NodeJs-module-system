
const http = require('http');
http.get('http://localhost:4000', (res)=>{
    const {statusCode} = res;
    
    const contenType = res.headers['content-type'];

    let error;

    if(statusCode != 200){
        error = new Error('Request Failed.\n' + `Status code ${statusCode}`)

    }else if(!/^application\/json/.test(contenType)){
        error = new Error ("Invalid content-type");
    }

    if(error){
        console.error(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf-8');

    let rawData = '';

    res.on('data', (chunk)=>{
        rawData += chunk;
    })

    res.on('end', ()=>{
        try{
            const parseData = JSON.parse(rawData);
            console.log(parseData);
        }catch(err){
            console.error(`Gor error: ${err.message}`);
        }
    })


})













const server = http.createServer((req, res)=>{

    res.writeHead(200, {
        'Content-type':"application/json"
    })

    res.end(JSON.stringify({
        id: 182204,
        name:"Awal Hossain"
    }))
})


    server.listen(4000, ()=>{
        console.log(`this server is running on ${4000}`);
    })

    