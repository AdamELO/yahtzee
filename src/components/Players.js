import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';

function Players({ player, scoreSup, scoreInf, reset }) {
    // scorsup clone
    let [scoreSup2, setScoreSup2] = useState(scoreSup);
    let [scoreInf2, setScoreInf2] = useState(scoreInf);

    function addingSup(i) {
        //making array clone
        let scoreSuperieur = [...scoreSup2];

        //confirm result
        scoreSuperieur[i].confirmed = true;
        scoreSuperieur[i].resultConf = scoreSup[i].result;

        // bonus & tot sup sum
        addingSupTotBonus(scoreSuperieur);
        addingTot();

        // setState
        setScoreSup2(scoreSuperieur);

        //reset attempts and checkbox
        reset();
    }
    function addingInf(i) {
        //making array clone
        let scoreinferieur = [...scoreInf2];

        //confirm result
        scoreinferieur[i].confirmed = true;
        scoreinferieur[i].resultConf = scoreInf[i].result;

        //total
        addingTot();

        // setState
        setScoreInf2(scoreinferieur);

        //reset attempts and checkbox
        reset();
    }

    function addingSupTotBonus(scoreSuperieur) {
        // tot sup
        var totSup = scoreSuperieur[7].resultConf;
        scoreSuperieur.filter(sup =>sup.scoreName ==='total')[0].resultConf = scoreSuperieur.reduce((acc, el) => acc + el.resultConf, 0) - totSup;

        // bonus
        scoreSuperieur.filter(sup =>sup.scoreName ==='total')[0].resultConf >= 63 ? scoreSuperieur.filter(sup =>sup.scoreName ==='bonus')[0].resultConf = 35 : scoreSuperieur.filter(sup =>sup.scoreName ==='bonus')[0].resultConf = 0;

        // tot sup to add bonus eventually
        var totSup = scoreSuperieur[7].resultConf;
        scoreSuperieur.filter(sup =>sup.scoreName ==='total')[0].resultConf = scoreSuperieur.reduce((acc, el) => acc + el.resultConf, 0) - totSup;
    }
    function addingTot() {
        let scoreInfWithoutTot = [];
        for (let i = 0; i < scoreInf.length -1 ; i++) {
            scoreInfWithoutTot.push(scoreInf[i]);
        }
        scoreInf.filter(tot =>tot.scoreName ==='total')[0].resultConf = scoreSup[scoreSup.length -1].resultConf + scoreInfWithoutTot.reduce((acc,el)=>acc+el.resultConf,0);
    }

    return (
        <div className="container">
            <ListGroup as="ul">
                {/* player name */}
                <ListGroup.Item as="li" variant='secondary' className='text-center'>{player.name}</ListGroup.Item>
                {/* loop each sup score */}
                {scoreSup.map((el, i) => {
                    return (
                        <ListGroup.Item as="li" key={i} className="p-1 d-flex justify-content-around align-items-center bold">
                            <span>{el.resultConf} pts</span>
                            {i <= (scoreInf.length - 2) ? <Badge hidden={el.confirmed || player.attempt === 3} onClick={() => addingSup(i)} className='btn' variant="primary">{el.result}</Badge> : ''}
                        </ListGroup.Item>
                    )
                })
                }
                {/* attempts */}
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Lancer restants: {player.attempt}</ListGroup.Item>
                {/* loop each inf score */}
                {scoreInf.map((el, i) => {
                    return (
                        <ListGroup.Item as="li" key={i} className="p-1 d-flex justify-content-around align-items-center bold">
                            <span>{el.resultConf} pts</span>
                            {i <= (scoreInf.length - 1) ? <Badge hidden={el.confirmed || player.attempt === 3} onClick={() => addingInf(i)} className='btn' variant="primary">{el.result}</Badge> : ''}
                        </ListGroup.Item>
                    )
                })
                }
            </ListGroup>
        </div >
    )
}

export default Players