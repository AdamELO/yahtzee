// import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Players({totalace,totaltwo,totalthree,totalfour,totalfive,totalsix }) {
    
    return (
        <div>
            <ListGroup as="ul">
                <ListGroup.Item as="li" variant='secondary' className='text-center'>Joueur 1</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totalace}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totaltwo}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totalthree}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totalfour}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totalfive}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> <span>{totalsix}</span> pts</ListGroup.Item>
                <ListGroup.Item as="li"> bonus pts</ListGroup.Item>
                <ListGroup.Item as="li"> total pts</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Players