
const baseUrl = 'http://localhost:3030/data/games/'

export default {


    async getLatestGame(){


        const data = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`)
            .then(response => response.json())
            .catch(e => console.log(e.message));

        const gamesList = Object.values(data) 
        
        return gamesList;


        
    },

    async getAllgames(){

        const data = await fetch(baseUrl)
            .then(response => response.json())
            .catch(e => console.log(e.message));

        const gamesList = Object.values(data) 
        
        return gamesList;

    },

    async getOneGame(gameId){
        const url = baseUrl + gameId;
        const result = await fetch(url)
        .then(data => data.json()); 

        console.log(result)

        return result;

    },

    editGame(gameId){

    },

    delGame(){gameId},






};