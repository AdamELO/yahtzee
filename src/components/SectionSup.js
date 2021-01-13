import ListGroup from 'react-bootstrap/ListGroup';

function SectionSup() {
    return (
        <div>
            <ListGroup as='ul'>
                <ListGroup.Item as='li' className="colorhead text-center">Section supérieur</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 1</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 2</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 3</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 4</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 5</ListGroup.Item>
                <ListGroup.Item as='li'>Total des 6</ListGroup.Item>
                <ListGroup.Item as='li'>Bonus 35 (63 pts ou plus)</ListGroup.Item>
                <ListGroup.Item as='li'>Total section supérieur</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SectionSup