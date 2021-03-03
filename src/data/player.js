var dataPlayer = {
    name: 'Adam',
    attempt: 3,
    turn: 0,
    Score: 0,
    Player_Name() {
        if (this.name === '') {
            this.name = prompt('Entrez votre nom de joueur');
        }
    }
}
export default dataPlayer;