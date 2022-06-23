const fs = require('fs');
const {parse} = require('csv-parse');


let habitablePlanet = [];

function isHabitable(data){
    // console.log(data.koi_disposition, "ddd");
    return (data.koi_disposition == 'CONFIRMED' && data.koi_insol < 1.1 && data.koi_insol > 0.36  && data.koi_prad < 1.6)
}

 fs.createReadStream('keplar-planer.csv')
.pipe(parse({
    comment: "#",
    columns: true

}))
.on("data", (data)=>{
// console.log(i);

    if(isHabitable(data)){
        habitablePlanet.push((data))  ;
    }
    // result.push(data);
})

.on('error', (error)=>{
    console.log(error);
})

.on('end', ()=>{
  let name =  habitablePlanet.map(planet => planet.kepler_name)

    console.log("The length of the habitable planer is ", habitablePlanet.length, name);
    console.log("done");
})