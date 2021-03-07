var dataPlayer = {
    name: '',
    attempt: 3,
    score: 0,
    Player_Name() {
        if (this.name === '') {
            this.name = prompt('Entrez votre nom de joueur');
        }
    }
}
export default dataPlayer;