import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';
import dataDices from './data/dices';
import dataPlayer from './data/player';
import dataScoreSup from './data/scoreSup';
import dataScoreInf from './data/scoreInf';
import scoreInfFct from './fct/scoreInf';
import Name from "./components/Name";
import NextRound from "./components/NextRound";

function App() {
  //player data
  let [player, setPlayer] = useState(dataPlayer);

  // set player name 
  let [inputName, setInputName] = useState("");

  //modal
  let [visible, setVisible] = useState(true);

  let [textModal, setTextModal] = useState(`Manche terminée, vous pouvez relancer`);

  function onChangeName(e) {
    setInputName(e.target.value);
  }
  function player_name() {
    var playername = player;
    if (inputName !== "") {
      setVisible(false);
      playername.name = inputName;
      setPlayer(playername);
    } else {
      alert('veuillez introduire votre nom SVP');
    }
  }

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
      setTextModal(`Il ne vous reste plus de lancer, confirmer d'abord les points pour passer à la manche suivante`);
      return setVisible(true);
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

    //score inf
    scoreInfFct(inf, results);

    // setState
    setScoreInf(inf);
  }

  //reset attempts and checkbox
  function resetAfterConf() {
    // player score
    let scorePlayer = player;
    player.score = scoreInf[scoreInf.length - 1].resultConf;
    setPlayer(scorePlayer);

    //check if game is finished
    let scoreConfirmation = [];
    for (let i = 0; i < scoreSup.length - 2; i++) {
      if (scoreSup[i].confirmed === true) {
        scoreConfirmation.push(true);
      }
    }
    for (let i = 0; i < scoreInf.length - 1; i++) {
      if (scoreInf[i].confirmed === true) {
        scoreConfirmation.push(true);
      }
    }
    if (scoreConfirmation.length === 13) {
      setTextModal(`vous avez terminé avec un score de ${player.score}`);
      setVisible(true);
    } else {
      // game not done yet
      setTextModal(`Manche terminée, vous pouvez relancer`);
      setVisible(true);
    }

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

    // hide checkbox
    if (player.attempt === 3) {
      let hide = hideCheckBox;
      hide = true
      setHideCheckBox(hide);
    }
  }

  function modalEndTurn() {
    if (textModal === `vous avez terminé avec un score de ${player.score}`) {
      document.location.reload();
    } else {
      setVisible(false);
    }
  }
  return (
    <div>
      <div className={visible ? 'fadein' : 'fadeout'}>
        {player.name === '' ? <Name visible={visible} player_name={() => player_name()} onChangeName={(e) => onChangeName(e)} /> : <NextRound textModal={textModal} modalEndTurn={() => modalEndTurn()} />}
      </div>
      <div className="container-fluid mt-5">
        <div className="row g-0">
          <div className="col-lg-2 mx-auto">
            <ScoreSheet />
          </div>
          <div className="col-lg-2 mx-auto">
            <Players player={player} scoreSup={scoreSup} scoreInf={scoreInf} reset={() => resetAfterConf()} />
          </div>
          <div className="col-lg-8 col-sm-12 col-md-12 container">
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