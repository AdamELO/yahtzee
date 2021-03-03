import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Players({player,score}) {
    
    return (
        <div className="container">
            <ListGroup as="ul">
                <ListGroup.Item as="li" variant='secondary' className='text-center'>{player.name}</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.one.result} pts</span> <Badge  variant="primary">{score.one.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.two.result} pts</span> <Badge  variant="primary">{score.two.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.three.result} pts</span> <Badge  variant="primary">{score.three.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.four.result} pts</span> <Badge  variant="primary">{score.four.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.five.result} pts</span> <Badge  variant="primary">{score.five.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.six.result} pts</span> <Badge  variant="primary">{score.six.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.bonus.result} pts</span> <Badge  variant="primary">{score.bonus.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" className="p-1 d-flex justify-content-around align-items-center"> <span>{score.totSup.result} pts</span> <Badge  variant="primary">{score.totSup.result}</Badge></ListGroup.Item>
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Lancer restants: {player.attempt}</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.threeOfAKind.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.fourOfAKind.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.full.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.straightSm.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.straightL.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.luck.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.yams.result} pts</span> </ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span>{score.tot.result} pts</span> </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Players