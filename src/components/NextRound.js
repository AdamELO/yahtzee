function NextRound({ textModal, modalEndTurn }) {
    return (
        <div className="card">
            <h1 className='text-center'>{textModal}</h1>
            <div className=" form__group mx-auto mt-2">
                <button onClick={modalEndTurn} className="btn colorhead mt-3">ok</button>
            </div>
        </div>
    )
}
export default NextRound;

