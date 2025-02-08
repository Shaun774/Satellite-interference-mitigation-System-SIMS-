import axios from "axios";

let latitude = 45.815693;
let longititude =  21.132806;
let altitude = 4;

let observationRa = 12.5;
let observationDec = 45.0;

let API_KEY = "Your api key";

async function satteliteOverhead() {
    try{
        const response =await axios.get(` https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longititude}/${altitude}/90/0/&apiKey=${API_KEY}`);
        const satellites = response.data.above
        console.log("Satellite overhead : ")
        let count = 0;
        // console.log(satellites)
        // satellites.forEach((sat)=>{
        //     console.log(`Satellite name : ${sat.satname} (ID:${sat.satid})`);
        //     count +=1
        // })
        console.log(count)
        let inteferingSatelite = satellites.filter((sat)=>{
            return Math.abs(sat.ra - observationRa)<100 && Math.abs(sat.dec -observationDec)<100;
        })

        if(inteferingSatelite>0){
            console.log("Warning ! : Satelites are in your observation area !");
            console.log(`${sat.satname} is near by.`)
        }
        else{
            console.log("Clear sky , no satelites in your observation area.")
        }
    }
    catch(err){
        console.log(err)
    }
}

satteliteOverhead()
