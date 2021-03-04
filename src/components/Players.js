import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';

function Players({ player, scoreSup }) {

    var [scoreSup2, setScoreSup2] = useState(scoreSup)
    function adding(i) {
        let scoreSuperieur = [...scoreSup2]
        scoreSuperieur[i].resultConf = scoreSup[i].result; 
        setScoreSup2(scoreSuperieur);
    }

    return (
        <div className="container">
            <ListGroup as="ul">
                <ListGroup.Item as="li" variant='secondary' className='text-center'>{player.name}</ListGroup.Item>
                {scoreSup.map((el, i) => {
                    return (
                        <ListGroup.Item as="li" key={i} className="p-1 d-flex justify-content-around align-items-center">
                            <span>{el.resultConf} pts</span>
                            <Badge onClick={()=>adding(i)} className='btn' variant="primary">{el.result}</Badge>
                        </ListGroup.Item>
                    )
                })

                }
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span> pts</span></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span> pts</span></ListGroup.Item>
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Lancer restants: {player.attempt}</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span> pts</span> </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Players