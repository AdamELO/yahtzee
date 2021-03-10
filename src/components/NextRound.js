function NextRound({ textModal, modalEndTurn }) {
    return (
        <div className="card">
            <h2 className='text-center fontsizeResp'>{textModal}</h2>
            <div className="position-relative text-center mt-5">
                <button onClick={modalEndTurn} className="btn colorhead mt-3">ok</button>
            </div>
        </div>
    )
}
export default NextRound;

