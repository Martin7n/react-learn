
const baseUrl = 'http://localhost:3030/data/comments';



export default {


    async getComments(gameId){
        const token = JSON.parse(localStorage.getItem("auth"))

        console.log(`gameIdService => ${gameId}`)

        const gameId1 = "3564027f-adcd-4425-b2c0-1253d2386c0c";
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
            console.log(`${baseUrl}?${query.toString()}`)
            const urlRequest = `${baseUrl}?${query.toString()}`;

            const response = await fetch(urlRequest, options);

            const data = await response.json();

            console.log(data)
            
            return data;
        } catch (err) {
            console.log(err)
        };



    },

    async addComment(gameId, data, userId){

        const token = JSON.parse(localStorage.getItem("auth"))
        const newComment = {
            owner: userId,
            content: data,
            gameId: gameId
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token.accessToken
            },
            body: JSON.stringify(newComment) 
        }

        try {
        console.log(options)
        const response = await fetch(baseUrl, options)
        const data = await response.json();

      
        
        return data;
     } catch (err) {
            console.log(err)
        }



    }



};