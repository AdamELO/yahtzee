var dataPlayer = {
    name: '',
    attempt: 3,
    score: 0,
    Player_Name() {
        do {
            this.name = prompt('Entrez votre nom de joueur');
        } while (this.name === null || this.name === "");
    }
}
export default dataPlayer;