import React, { useEffect, useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';
import dataDices from './data/dices';
import dataPlayer from './data/player';
import dataScoreSup from './data/score';



function App() {

  //player data
  var [player, setPlayer] = useState(dataPlayer)

  // when loading asking for player name 
  player.Player_Name()

  // dices data
  var [dices, setDices] = useState(dataDices)

  // score Sup data
  var [scoreSup, setScoreSup] = useState(dataScoreSup)

  // when rolling the dice
  function roll() {

    // player attempts
    let playerAttempt = player;
    playerAttempt.attempt--;

    // dice results
    const check = document.querySelectorAll('.check');
    let de = [...dices];
    de.forEach((el, i) => {
      el.kept = check[i].checked ? true : false;
      if (el.kept === false) {
        el.result = (Math.floor(Math.random() * (6)) + 1).toString();
        el.rollClass = el.rollClass === 'even-roll' ? 'odd-roll' : 'even-roll';
      }
    });

    // setStates
    setDices(de);
    setPlayer(playerAttempt);

    //console check
    // console.log(dices);

    // scoresheet
    scoreSheetSup();
  }

  function scoreSheetSup() {
    let sup = [...scoreSup];
    sup.forEach((el) => {
      var diceFiltered = dices.filter(dice => dice.result === `${el.scoreId}`);
      var diceSum = diceFiltered.reduce((acc, dice) => acc + parseInt(dice.result), 0);
      el.result = diceSum;
    });
    setScoreSup(sup);
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
            <Players player={player} scoreSup={scoreSup}/>
          </div>
          <div className="col-8 container">
            <div className="bg-green allCenter flex-column">
              <div className="allCenter">
                <div className="row">
                  {dices.map((el, i) => {
                    return (
                      <div key={i} className="col">
                        <Dice dice={el} attempt={player.attempt} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button onClick={() => roll()} disabled={player.attempt === 0 ? 'disabled' : ''} 
                  className="btn btn-danger">Lancer</button>
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