
const baseUrl = 'http://localhost:3030/data/games/'

export default {


    async getLatestGame(){

        
    const burl = 'http://localhost:3030/data/games'

        const data = await fetch(`${baseUrl}?offset=0&pageSize=3?sortBy=_createdOn%20desc`)
        // const data = await fetch(`${burl}?sortBy=val%20desc%2C_createdOn`)
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
        console.log(gamesList)
        
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
            method: "PUT",
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

    async delGame(gameId){
        const token = JSON.parse(localStorage.getItem("auth"))
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
            // body: JSON.stringify(data) 
        }

        const result = await fetch(baseUrl + gameId, options)
                        .then(response => response.json())
                        .catch(e => console.log(e.message));
        return result;





    },






};