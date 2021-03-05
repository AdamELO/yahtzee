import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';
import dataDices from './data/dices';
import dataPlayer from './data/player';
import dataScoreSup from './data/scoreSup';
import dataScoreInf from './data/scoreInf';


function App() {

  //player data
  let [player, setPlayer] = useState(dataPlayer);

  // when loading asking for player name 
  player.Player_Name();

  // dices data
  let [dices, setDices] = useState(dataDices);

  // score Sup data
  let [scoreSup, setScoreSup] = useState(dataScoreSup);
  // score Inf data
  let [scoreInf, setScoreInf] = useState(dataScoreInf);

  // hide checkbox trur or false
  let [hideCheckBox, setHideCheckBox] = useState(true);

  // when rolling the dice
  function roll() {
    // check attempts
    if (player.attempt === 0) {
      return alert('Il ne vous reste plus de lancer, confirmer d\'abord les points pour passer à la manche suivante');
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
    scoreSheetInf();
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

  function scoreSheetInf() {
    let inf = [...scoreInf];
    // push all results in array
    let results = [];
    dices.forEach(el => {
      results.push(parseInt(el.result));
    });
    // three of a kind
    threeOfAKind(inf, results);
    // four of a kind
    fourOfAKind(inf, results);
    //full
    full(inf, results);
    // small straight
    smallStraight(inf, results);
    // large straight
    largeStraight(inf, results);
    //luck
    luck(inf, results);
    //yams
    yams(inf, results);

    // setState
    setScoreInf(inf);
  }
  // three of kind fct
  function threeOfAKind(inf, results) {
    // push all result in another array if there is three of a kind
    let threeOfAKind = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 2] === tempArray[i]) {
        threeOfAKind.push(tempArray[i]);
      }
    }

    // check if three of a kind array is nul if not multiply result by 3
    if (threeOfAKind.length !== 0) {
      let threeOfAKindResult = threeOfAKind[0] * 3;
      inf.filter(inf => inf.scoreName === 'threeOfAKind')[0].result = threeOfAKindResult;
    } else {
      inf.filter(inf => inf.scoreName === 'threeOfAKind')[0].result = 0;
    }
  }
  //four of kind fct
  function fourOfAKind(inf, results) {
    // push all result in another array if there is four of a kind
    let fourOfAKind = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 3] === tempArray[i]) {
        fourOfAKind.push(tempArray[i]);
      }
    }

    // check if four of a kind array is nul if not multiply result by 4
    if (fourOfAKind.length !== 0) {
      let fourOfAKindResult = fourOfAKind[0] * 4;
      inf.filter(inf => inf.scoreName === 'fourOfAKind')[0].result = fourOfAKindResult;
    } else {
      inf.filter(inf => inf.scoreName === 'fourOfAKind')[0].result = 0;
    }
  }
  //Yams fct
  function yams(inf, results) {
    // push all result in another array if there is yams
    let yams = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 4] === tempArray[i]) {
        yams.push(tempArray[i]);
      }
    }

    // check if yams array is nul if not + 50 pts
    if (yams.length !== 0) {
      inf.filter(inf => inf.scoreName === 'yams')[0].result = 50;
    } else {
      inf.filter(inf => inf.scoreName === 'yams')[0].result = 0;
    }
  }
  function full(inf, results) {
    // push all result in another array if there is a full
    let full = [];
    //checking for three same dices
    const tempArray = [...results].sort();
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 2] === tempArray[i]) {
        full.push(tempArray[i]);
      }
    }
    //checking for two same dices
    const tempArray2 = [...results].sort();
    for (let i = 0; i < tempArray2.length; i++) {
      if (tempArray2[i + 1] === tempArray2[i]) {
        full.push(tempArray2[i]);
      }
    }
    //checking full and if there is a full : +25pts
    if (full.length === 4) {
      inf.filter(inf => inf.scoreName === 'full')[0].result = 25;
    } else {
      inf.filter(inf => inf.scoreName === 'full')[0].result = 0;
    }
  }
  // luck fct
  function luck(inf, results) {
    // sum all results
    let luckResult = results.reduce((acc, result) => acc + result, 0);
    inf.filter(inf => inf.scoreName === 'luck')[0].result = luckResult;
  }
  function smallStraight(inf, results) {
    const resultNoDupesAndSorted = [...new Set(results)].sort();
    console.log(resultNoDupesAndSorted);

    inf.filter(inf => inf.scoreName === 'straightSm')[0].result = 30;
  }
  function largeStraight(inf, results) {
    // sort and filter results to see if there is a large straight
    const resultNoDupesAndSorted = [...new Set(results)].sort();
    let largeStraight = resultNoDupesAndSorted.filter(result => result >= 2 && result <= 5);
    if (largeStraight.length === 4 && resultNoDupesAndSorted.length === 5) {
      inf.filter(inf => inf.scoreName === 'straightL')[0].result = 40;
    } else {
      inf.filter(inf => inf.scoreName === 'straightL')[0].result = 0;
    }
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
      <div className="container-fluid mt-5">
        <div className="row g-0">
          <div className="col-2">
            <ScoreSheet />
          </div>
          <div className="col-2">
            <Players player={player} scoreSup={scoreSup} scoreInf={scoreInf} reset={() => resetAfterConf()} />
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