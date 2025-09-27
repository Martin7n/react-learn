
const baseUrl = 'http://localhost:3030/jsonstore/games'

export default {

    async getAllgames(){

        const data = await fetch(baseUrl)
            .then(response => response.json())
            .catch(e => console.log(e.message));

        const gamesList = Object.values(data) 
        
        return gamesList;

    },

    getOneGame(gameId){

    },

    editGame(gameId){

    },

    delGame(){gameId},






};