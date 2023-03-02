var volumeCurve = new Float32Array(9);
volumeCurve = [0.1, 0.1, 0.2, 0.4, 0.6, .4, .2, .1, .1]

function sequence() {
  
randomStation(1)
ramp(0, 0.7, 2, 1)
randomStation(2)
createNoise(10000, 1600)
loop()
}

async function loop() {
  // let durationSecs = 2 + getRandomInt(8)
  let durationSecs = 7
  for (let i = 0; i < 100; i++){
    let randomBand = (getRandomInt(35) * 100) + 1000
    let bandpass = document.bandpass
    let noiseGain = document.noiseGain
    bandpass.frequency.value = randomBand
    noiseGain.gain.setValueCurveAtTime(volumeCurve, audioCtx.currentTime, durationSecs)

    
    let j = 1 + (i % 4)
    console.log("loop", i, j)
    let k = 1 + ((i + 1) % 4)
    let l = 1 + ((i + 2) % 4)
    let m = 1 + ((i + 3) % 4)
    console.log(j, k, l, m)
    randomStation(l)
    randomStation(m)
    ramp(1, 0, durationSecs, (j)) // startval, endval, seconds, playerid
    ramp(0, 1, durationSecs, (k))

    await wait(durationSecs * 1000);

    
    
    

  }
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}





// let playerid = 1 + getRandomInt(4)
// randomStation(playerid)
// loopRandomStation()  




// function loopRandomStation() {
//     var min = 0,
//       max = 7;
//     var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
//     console.log("rand", rand)
//     let playerid = 1 + getRandomInt(4)
//     randomStation(playerid)
//     setTimeout(loopRandomStation, rand * 1000);
//   }
  

