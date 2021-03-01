// import { useEffect, useState } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';

function Players() {

    return (
        <div className="box">
            <div className="dice first-face">
                <span className="dot"> </span>
            </div>
            <div className="dice second-face">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="dice third-face">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="dice fourth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div className="dice fifth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div className="dice sixth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    )
}

export default Players