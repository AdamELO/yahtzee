import ListGroup from 'react-bootstrap/ListGroup';

function SectionInf() {
    return (
        <div>
            <ListGroup as='ul'>
                <ListGroup.Item as='li' className="colorhead text-center">Section Inférieur</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Brelan</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Carré</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Full</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Petite Suite</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Grande Suite</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Chance</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Yams</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SectionInf