function Name({ onChangeName, player_name }) {
    return (
        <div className="card">
            <h1 className='text-center'>Introduisez votre nom de joueur</h1>
            <div className="form__group field mx-auto d-flex mt-2">
                <input onChange={onChangeName} type="input" className="form__field" placeholder="Nom" required />
                <label forhtml="name" className="form__label">Nom:</label>
                <button onClick={player_name} className="btn colorhead mt-3">ok</button>
            </div>
        </div>
    )
}
export default Name;