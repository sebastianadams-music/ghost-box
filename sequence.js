const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)

var volumeCurve = new Float32Array(9);
volumeCurve = [0.1, 0.05, 0.1, 0.15, 0.15, .1, .05, .02, .01]




function sequence() {
  
randomStation(1)
// ramp(0, 0.7, 2, 1)
randomStation(2)
randomStation(3)
randomStation(4)
randomStation(5)
randomStation(6)
createNoise(10000, 1600)
scheduler()
}

let nextNoteTime = 0.0
let timerID;
let indexSequence = 0
function scheduler() {
  // While there are notes that will need to play before the next interval,
  // schedule them and advance the pointer.
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    let rand = (Math.random() * .2) + .5
    loop(indexSequence, rand)
    indexSequence++

  }
  timerID = setTimeout(scheduler, lookahead);
}


async function loop(i, duration) {
  // let durationSecs = 2 + getRandomInt(8)
  let time = audioCtx.currentTime
  let durationSecs = duration
  let bandpass = document.bandpass
  let noiseGain = document.noiseGain

  let randomBand = (getRandomInt(35) * 100) + 1000

  bandpass.frequency.exponentialRampToValueAtTime(randomBand, audioCtx.currentTime + durationSecs)
  
  noiseGain.gain.cancelScheduledValues(audioCtx.currentTime)
  noiseGain.gain.setValueCurveAtTime(volumeCurve, time, durationSecs)

  
  let j = 1 + (i % 8)
  console.log("loop", i, j)
  let k = 1 + ((i + 1) % 8)
  let l = 1 + ((i + 2) % 8)
  let m = 1 + ((i + 3) % 8)
  let n = 1 + ((i + 4) % 8)
  let o = 1 + ((i + 5) % 8)
  let p = 1 + ((i + 6) % 8)
  let q = 1 + ((i + 7) % 8)

  console.log(j, k, l, m)
  // randomStation(l)
  // randomStation(m)
  // randomStation(n)
  // randomStation(o)
  randomStation(p)
  randomStation(q)

  ramp(1, 0, durationSecs, (j)) // startval, endval, seconds, playerid
  ramp(0, 1, durationSecs, (k))
  volume("player" + l, 0)
  volume("player" + m, 0)
  volume("player" + n, 0)
  volume("player" + o, 0)
  nextNoteTime = duration + time + 0.001

    
    
    
  
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
  

