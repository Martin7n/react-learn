

const baseUrl = 'http://localhost:3030/jsonstore/users/';

export default {

    
    async getAllUsers(){

        const result = await fetch(baseUrl).then(usrs => usrs.json())
        const data =  Object.values(result);
        return data;

    },

    async getOne(userId){
        const iddd = '07f260f4-466c-4607-9a33-f7273b24f1b4'

        const url = baseUrl + userId
        console.log(url)
        const result = await fetch(url)
        .then(usr => usr.json())

        return result;
    },

    async searchUser(query){
        return []
    }

};