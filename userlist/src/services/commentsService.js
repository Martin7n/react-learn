
const baseUrl = 'http://localhost:3030/data/comments';
const token = JSON.parse(localStorage.getItem("auth"))



export default {


    async getComments(gameId){

        const query = new URLSearchParams(
            {
            where: `gameId="${gameId}"`,
            load: `owner=_ownerId:users`
            }
        )
      
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
        };

        try {
            const urlRequest = `${baseUrl}?${query.toString()}`;

            const response = await fetch(baseUrl, options);

            const data = await response.json();

            console.log(data)
            
            return data;
        } catch (err) {
            console.log(err)
        };



    },

    async addComment(gameId, data){


        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
            body: JSON.stringify(data) 
        }

        const result = await fetch(baseUrl, options)


    }



};