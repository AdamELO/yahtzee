import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';

function Players({ player, scoreSup,reset }) {
    // scorsup clone
    let [scoreSup2, setScoreSup2] = useState(scoreSup);

    function adding(i) {
        //making array clone
        let scoreSuperieur = [...scoreSup2];

        //confirm result
        scoreSuperieur[i].confirmed = true;
        scoreSuperieur[i].resultConf = scoreSup[i].result;

        // bonus & tot sup sum
        addingSupTotBonus(scoreSuperieur);

        // setState
        setScoreSup2(scoreSuperieur);
        
        //reset attempts and checkbox
        reset();
    }

    function addingSupTotBonus(scoreSuperieur) {
        // tot sup
        let scoreSupWithoutTot = [];
        for (let i = 0; i < scoreSuperieur.length - 1; i++) {
            scoreSupWithoutTot.push(scoreSuperieur[i]);
        }
        scoreSuperieur[7].resultConf = scoreSupWithoutTot.reduce((acc, el) => acc + el.resultConf, 0);

        // bonus
        scoreSuperieur[7].resultConf >= 63 ? scoreSuperieur[6].resultConf = 35 : scoreSuperieur[6].resultConf = 0;
    }

    return (
        <div className="container">
            <ListGroup as="ul">
                {/* player name */}
                <ListGroup.Item as="li" variant='secondary' className='text-center'>{player.name}</ListGroup.Item>
                {/* loop each sup score */}
                {scoreSup.map((el, i) => {
                    return (
                        <ListGroup.Item as="li" key={i} className="p-1 d-flex justify-content-around align-items-center">
                            <span>{el.resultConf} pts</span>
                            {i <= 5 ? <Badge hidden={el.confirmed || player.attempt === 3} onClick={() => adding(i)} className='btn' variant="primary">{el.result}</Badge> : ''}
                        </ListGroup.Item>
                    )
                })

                }
                {/* attempts */}
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Lancer restants: {player.attempt}</ListGroup.Item>
                {/* loop each inf score */}
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
            </ListGroup>
        </div >
    )
}

export default Players