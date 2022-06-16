// const http = require('https') or 
// const {request} = require('https')
const {get} = require('https')

const req =get('https://www.google.com', (res)=>{

    res.on('data', (chunk)=>{
        console.log(`Data chunk ${chunk}`);

    })

    res.on('end', ()=>{
        console.log("NO more data");
    })
});

// req.end()