var dataPlayer = {
    name: 'Adam',
    attempt: 3,
    Player_Name() {
        if (this.name === '') {
            this.name = prompt('Entrez votre nom de joueur');
        }
    }
}
export default dataPlayer;