document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

 
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#result").textContent = data.coinFlip  
}

document.querySelector('#throw').addEventListener('click', makeRPSReq)

async function makeRPSReq(){
  let userInputChoice = document.querySelector('#choice').value.toLowerCase()

  function rPS (userChoice, cpuChoice){
    if (userChoice == cpuChoice){
      return `Computer chooses ${cpuChoice}   ----    Draw!`
    } else if(userChoice == 'rock' && cpuChoice == 'paper' || userChoice == 'paper' && cpuChoice == 'scissors' ||   userChoice == 'scissors' && cpuChoice == 'rock'){
        return `Computer chooses ${cpuChoice}   ----    You lose!`
    } else if(userChoice == 'scissors' && cpuChoice == 'paper' || userChoice == 'rock' && cpuChoice == 'scissors' ||userChoice == 'paper' && cpuChoice == 'rock'){
      return `Computer chooses ${cpuChoice}   ----    You win!`
  } else {
    return 'Invalid choice. Type rock, paper, or scissors'
  }
  }
 
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
    let cpuRandomChoice = data.rockPS
  document.querySelector('#rPSResult').textContent = rPS(userInputChoice,cpuRandomChoice)
  
}