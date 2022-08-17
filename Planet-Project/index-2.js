const fs = require('fs');
const {parse} = require('csv-parse');

const habitablePlanet = [];

function isHabitable(data){
    return (data.koi_disposition == 'CONFIRMED' && data.koi_insol < 1.1 && data.koi_insol > 0.36  && data.koi_prad < 1.6)
}

fs.createReadStream('keplar-planer.csv').pipe(parse({
    comment: "#",
    columns: true
}))

.on('data', (data)=>{
   
    if(isHabitable(data)){
        habitablePlanet.push(data)
    }
    
})

.on('error', (error)=>{
    console.log(error);
})

.on('end', ()=>{
    let name =  habitablePlanet.map(planet => planet.kepler_name)
    console.log(`There are total ${name.length} live-able planet out there and their name are ${name}`);
    console.log("Closed the stream");
})