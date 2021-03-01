import React, { useState } from 'react';
import ScoreSheet from './components/Yahtzee_Score_Sheet';
import Players from './components/Players';
import Dice from './components/Dice';



function App() {

  var [player, setPlayer] = useState({
    name: '',
    attempt: 0,
    diceKept:[],
    diceThrow:[],
    Score:0,
    Player_Name(){
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
        <div className="row">
          <div className="col-2">
            <ScoreSheet />
          </div>
          <div className="col-2">
            <Players player={player} />
          </div>
          <div className="col-8">
            <div className="bg-green d-flex justify-content-center align-items-center">
              <div className="container2 d-flex flex-row">
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;