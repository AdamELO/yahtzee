import React, { useEffect, useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';
import dataDices from './data/dices';
import dataPlayer from './data/player';
import dataScore from './data/score';



function App() {

  //player data
  var [player, setPlayer] = useState(dataPlayer)

  // when loading asking for player name 
  player.Player_Name()

  // dices data
  var [dices, setDices] = useState(dataDices)

  // score data
  var [scores, setScores] = useState(dataScore)

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
    let score = scores;
    for (let i = 1; i < 7; i++) {
      var diceFiltered = dices.filter(dice => dice.result === `${i}`);
      var diceSum = diceFiltered.reduce((acc, dice) => acc + parseInt(dice.result), 0);
      switch (i) {
        case 1:
          score.one.result = diceSum;
          break;
        case 2:
          score.two.result = diceSum;
          break;
        case 3:
          score.three.result = diceSum;
          break;
        case 4:
          score.four.result = diceSum;
          break;
        case 5:
          score.five.result = diceSum;
          break;
        case 6:
          score.six.result = diceSum;
          break;
        default:
          break;
      }
    };

    
    //tot section sup
    // let arrSup = [scores.one.result,scores.two.result,scores.three.result,scores.four.result,scores.five.result,scores.six.result,scores.bonus]
    // let totsup = arrSup.reduce((acc,x)=>acc + x,0);
    // console.log(totsup)
    
    //bonus
    // totsup >=63 ? score.one.bonus = 35 : 0;

    setScores(score);
  }

  function confirmedClick() {
    // au click du badge je confirme les pts 
    // ce qui veut dire que je l'affiche dans la partie gauche(pas le badge) et que je ne pourrai 
    // plus voir le badge car terminado jai confirmer
    let sco = scores;
    sco.one.confirmed = true;
    sco.one.resultConf = scores.one.result;
    setScores(sco);
    // console.log(scores.one);
    
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
            <Players player={player} score={scores} conf={()=>confirmedClick()}/>
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
                  <button onClick={() => roll()} disabled={player.attempt === 0 ? 'disabled' : ''} className="btn btn-danger">Lancer</button>
                  <button onClick={()=>confirmedClick()}>test</button>
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