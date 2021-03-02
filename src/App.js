import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';



function App() {

  var [player, setPlayer] = useState({
    name: 'Adam',
    attempt: 3,
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


  var [dices, setDices] = useState([
    {
      diceNumber: 1,
      result: '1',
      kept: 0,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 2,
      result: '2',
      kept: 0,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 3,
      result: '3',
      kept: 0,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 4,
      result: '4',
      kept: 0,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 5,
      result: '5',
      kept: 0,
      rollClass: 'even-roll'
    }
  ])

  function roll() {
    console.log(dices);

    // player attempts
    let playerAttempt = player;
    playerAttempt.attempt--;
    
    // dice results
    var de = [...dices];
    de.forEach(el => {
      el.result = (Math.floor(Math.random() * (6)) + 1).toString();
      el.rollClass = el.rollClass === 'even-roll' ? 'odd-roll' : 'even-roll';

    });

    // setStates
    setDices(de);
    setPlayer(playerAttempt);
    console.log(dices);

    // const box = document.querySelectorAll('.check');
    // var garder = dices.diceKept;
    // var jeter = dices.diceThrow;
    // box.forEach((check, index) => {
    //   if (check.checked) {
    //     garder.push((index + 1));
    //   } else {
    //     jeter.push((index + 1));
    //   }
    // });
  }
  function check() {
    console.log(`test`);
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
            <Players player={player} />
          </div>
          <div className="col-8 container">
            <div className="bg-green allCenter flex-column">
              <div className="allCenter">
                <div className="row">
                  {dices.map((el, i) => {
                    return (
                      <div key={i} className="col">
                        <Dice dice={el} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col"><button onClick={() => roll()} className="btn btn-danger">Lancer</button><button onClick={() => check()}>check</button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;