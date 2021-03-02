import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';



function App() {

  var [player, setPlayer] = useState({
    name: 'Adam',
    attempt: 3,
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
      kept: false,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 2,
      result: '2',
      kept: false,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 3,
      result: '3',
      kept: false,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 4,
      result: '4',
      kept: false,
      rollClass: 'even-roll'
    },
    {
      diceNumber: 5,
      result: '5',
      kept: false,
      rollClass: 'even-roll'
    }
  ])

  function roll() {

    // player attempts
    let playerAttempt = player;
    playerAttempt.attempt--;
    
    // dice results
    const check = document.querySelectorAll('.check');
    var de = [...dices];
    de.forEach((el,i) => {
      el.kept = check[i].checked  ? true : false;
      if (el.kept === false) {
        el.result = (Math.floor(Math.random() * (6)) + 1).toString();
        el.rollClass = el.rollClass === 'even-roll' ? 'odd-roll' : 'even-roll';
      }
    });

    // setStates
    setDices(de);
    setPlayer(playerAttempt);

    //console check
    console.log(dices);

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
                        <Dice dice={el} attempt={player.attempt}/>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button onClick={() => roll()} disabled={player.attempt === 0 ? 'disabled' : ''} className="btn btn-danger">Lancer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;