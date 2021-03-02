import ListGroup from 'react-bootstrap/ListGroup';

function Players({player}) {
    
    return (
        <div className="container">
            <ListGroup as="ul">
                <ListGroup.Item as="li" variant='secondary' className='text-center'>{player.name}</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> bonus pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> total pts</ListGroup.Item>
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Lancer restants: {player.attempt}</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> <span></span> pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> bonus pts</ListGroup.Item>
                <ListGroup.Item as="li" className="p-1"> total pts</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Players