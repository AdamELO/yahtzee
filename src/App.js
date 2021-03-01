import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';



function App() {

  var [player, setPlayer] = useState({
    name: '',
    attempt: 0,
    diceKept: [],
    diceThrow: [],
    Score: 0,
    Player_Name() {
      if (player.name == '') {
        this.name = prompt('Entrez votre nom de joueur');
      }
    }
  })
  if (player.name == '') {
    player.Player_Name()
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
                  <div className="col"><Dice/></div>
                  <div className="col"><Dice/></div>
                  <div className="col"><Dice/></div>
                  <div className="col"><Dice/></div>
                  <div className="col"><Dice/></div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col"><button className="btn btn-danger">Lancer</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;