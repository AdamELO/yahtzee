function Dice({dice,attempt}) {

    return (
        <div>
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
            <div className='text-center'>
                <label className='mr-1 text-white'>garder ?</label>
                <input type="checkbox" disabled={attempt === 3 || attempt === 0 ? 'disabled' : ''} className='check' />
            </div>
        </div>
    )
}

export default Dice