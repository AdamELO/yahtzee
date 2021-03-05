import React, { useEffect, useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';
import dataDices from './data/dices';
import dataPlayer from './data/player';
import dataScoreSup from './data/score';



function App() {

  //player data
  let [player, setPlayer] = useState(dataPlayer)

  // when loading asking for player name 
  player.Player_Name()

  // dices data
  let [dices, setDices] = useState(dataDices)

  // score Sup data
  let [scoreSup, setScoreSup] = useState(dataScoreSup)

  // hide checkbox trur or false
  let [hideCheckBox,setHideCheckBox] = useState(true);

  // when rolling the dice
  function roll() {
    // check attempts
    if (player.attempt === 0) {
      return alert('il ne vous reste plus de lancer, confirmer d\'abord les points pour passer à la manche suivante');
    }
    if (player.attempt < 4) {
      let hide = hideCheckBox;
      hide = false
      setHideCheckBox(hide);
    }
    // player attempts - 1
    let playerAttempt = player;
    playerAttempt.attempt--;

    // dice results and dice animation
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

    // scoresheet
    scoreSheetSup();
  }

  function scoreSheetSup() {
    let sup = [...scoreSup];
    for (let i = 0; i < 6; i++) {
      let diceFiltered = dices.filter(dice => dice.result === `${i + 1}`);
      let diceSum = diceFiltered.reduce((acc, dice) => acc + parseInt(dice.result), 0);
      sup[i].result = diceSum;
    }
    // setState
    setScoreSup(sup);
  }

  //reset attempts and checkbox
  function resetAfterConf() {
    // attempts
    let playerAtt = player;
    playerAtt.attempt = 3;
    setPlayer(playerAtt);

    // checkbox
    const check = document.querySelectorAll('.check');
    dices.forEach((el, i) => {
      check[i].checked = false;
      el.kept = false;
    });

    alert('Manche terminée, vous pouvez relancer');
    // hide checkbox
    if (player.attempt === 3) {
      let hide = hideCheckBox;
      hide = true
      setHideCheckBox(hide);
    }
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
            <Players player={player} scoreSup={scoreSup} reset={()=>resetAfterConf()}/>
          </div>
          <div className="col-8 container">
            <div className="bg-green allCenter flex-column">
              <div className="allCenter">
                <div className="row">
                  {dices.map((el, i) => {
                    return (
                      <div key={i} className="col">
                        <Dice dice={el} attempt={player.attempt} hide={hideCheckBox} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button onClick={() => roll()}
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