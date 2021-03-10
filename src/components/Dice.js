function Dice({dice,hide}) {

    return (
        <div id='diceResp'>
            <div className={`box ${dice.rollClass}`} data-roll={dice.result}>
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
            <div className='text-center m-1' hidden={hide}>
                <input type="checkbox" className='check' />
            </div>
        </div>
    )
}

export default Dice