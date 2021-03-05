import ListGroup from 'react-bootstrap/ListGroup';

function SectionSup() {
    return (
        <div>
            <ListGroup as='ul'>
                <ListGroup.Item as='li' className="colorhead text-center">Section supérieur</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 1</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 2</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 3</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 4</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 5</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total des 6</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Bonus 35 (63 pts+)</ListGroup.Item>
                <ListGroup.Item as='li' className="p-1">Total section supérieur</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SectionSup