import { useState } from 'react';
import Players from './Players';
import SectionSup from './SectionSup';
import SectionInf from './SectionInf';

function ScoreSheet() {
    let [dice, setDice] = useState([]);
    let [totalAce, setTotalAce] = useState('X');
    let [totalTwo, setTotalTwo] = useState('X');
    let [totalThree, setTotalThree] = useState('X');
    let [totalFour, setTotalFour] = useState('X');
    let [totalFive, setTotalFive] = useState('X');
    let [totalSix, setTotalSix] = useState('X');
    // let [totalSup, setTotalSup] = useState(0);

    let randomDice = () => {
        dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        setDice(dice);
        totalAce = dice.filter(ace => ace === 1);
        setTotalAce(totalAce.length);
        totalTwo = dice.filter(Two => Two === 2);
        setTotalTwo(totalTwo.length * 2);
        totalThree = dice.filter(Three => Three === 3);
        setTotalThree(totalThree.length * 3);
        totalFour = dice.filter(Four => Four === 4);
        setTotalFour(totalFour.length * 4);
        totalFive = dice.filter(Five => Five === 5);
        setTotalFive(totalFive.length * 5);
        totalSix = dice.filter(Six => Six === 6);
        setTotalSix(totalSix.length * 6);
        // totalSup = totalAce + totalFive + totalFour + totalSix +totalThree + totalTwo;
        // setTotalSup(totalSup);
    }


    return (
        <div>
            <h1 className='text-center p-0 my-2'>Yahtzee</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <SectionSup/>
                        <SectionInf/>
                    </div>
                    <div className="col-2">
                        <Players totalace={totalAce} totaltwo={totalTwo} totalthree={totalThree} totalfour={totalFour} totalfive={totalFive} totalsix={totalSix} />
                    </div>
                    <div className="col-2 text-center">
                        <div className="p-2 mb-1 border border-black bg-white">
                            {[...dice]}
                        </div>
                        <button onClick={randomDice} className='btn btn-warning'>lancer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScoreSheet;