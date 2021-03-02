import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';



function App() {

  var [player, setPlayer] = useState({
    name: 'Adam',
    attempt: 0,
    diceKept: [],
    diceThrow: [],
    Score: 0,
    Player_Name() {
      if (player.name === '') {
        this.name = prompt('Entrez votre nom de joueur');
      }
    }
  })

  if (player.name === '') {
    player.Player_Name()
  }


  var [dices,setDices] = useState({
    attempt: 3,
    diceKept: [],
    diceThrow: [],
    firstDice:'1',
    secondDice:'2',
    thirdDice:'3',
    fourthDice:'4',
    fifthDice:'5',
    rollClass: 'even-roll',
  })

  function roll(){

    dices.firstDice = (Math.floor(Math.random() * (6)) + 1).toString();
    dices.secondDice = (Math.floor(Math.random() * (6)) + 1).toString();
    dices.thirdDice = (Math.floor(Math.random() * (6)) + 1).toString();
    dices.fourthDice = (Math.floor(Math.random() * (6)) + 1).toString();
    dices.fifthDice = (Math.floor(Math.random() * (6)) + 1).toString();


    dices.rollClass = dices.rollClass === 'even-roll' ? 'odd-roll' : 'even-roll';

  
    dices.attempt = dices.attempt + 1

    const box = document.querySelectorAll('.check');
    var garder = dices.diceKept;
    var jeter = dices.diceThrow;
    box.forEach((check,index) => {
      if (check.checked) {
        garder.push((index+1));
      } else {
        jeter.push((index+1));
      }
    });

    setDices(dices);
  }
  function check() {
    console.log(dices.firstDice,dices.secondDice,dices.thirdDice,dices.fourthDice,dices.fifthDice);
    console.log(` encore ${dices.attempt} lancer`);
    console.log(dices.diceKept,dices.diceThrow);
    
  }

  return (
    <div>
      <h1 className='text-center p-0 my-2'>Yahtzee</h1>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-2">
            <ScoreSheet />
          </div>
          <div className="col-2">
            <Players player={player} attempts={dices.attempt}/>
          </div>
          <div className="col-8 container">
            <div className="bg-green allCenter flex-column">
              <div className="allCenter">
                <div className="row">
                  <div className="col"><Dice dice={dices.firstDice} rollClass={dices.rollClass}/></div>
                  <div className="col"><Dice dice={dices.secondDice} rollClass={dices.rollClass}/></div>
                  <div className="col"><Dice dice={dices.thirdDice} rollClass={dices.rollClass}/></div>
                  <div className="col"><Dice dice={dices.fourthDice} rollClass={dices.rollClass}/></div>
                  <div className="col"><Dice dice={dices.fifthDice} rollClass={dices.rollClass}/></div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col"><button onClick={()=>roll()} className="btn btn-danger">Lancer</button><button onClick={()=>check()}>check</button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;