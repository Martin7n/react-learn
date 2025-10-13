
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

    async createGame(data){

        //!! token transfer to be updated
        const token = JSON.parse(localStorage.getItem("auth"))
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
            body: JSON.stringify(data) 
        }

        

        const result = await fetch(baseUrl, options)
                        .then(response => response.json())
                        .catch(e => console.log(e.message));
        return result;

    },

    async editGame(gameId, data){

        const token = JSON.parse(localStorage.getItem("auth"))
        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
            body: JSON.stringify(data) 
        }

        

        const result = await fetch(baseUrl + gameId, options)
                        .then(response => response.json())
                        .catch(e => console.log(e.message));
        return result;

    },

    delGame(){gameId},






};