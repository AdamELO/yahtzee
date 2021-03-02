function Dice({dice,rollClass}) {

    return (
        <div>
            <div className={`box ${rollClass}`} data-roll={dice}>
                <div className="dice first-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
                    <span className="dot"> </span>
                </div>
                <div className="dice second-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="dice third-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="dice fourth-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="dice fifth-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
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
                <div className="dice sixth-face" style={{ backgroundColor: "rgb(201, 195, 195)" }}>
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
                <input type="checkbox" className='check' />
            </div>
        </div>
    )
}

export default Dice