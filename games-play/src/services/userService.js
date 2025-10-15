

const baseUrl = 'http://localhost:3030/jsonstore/users/';

export default {

    
    async getAllUsers(){

        const result = await fetch(baseUrl).then(usrs => usrs.json())
        const data =  Object.values(result);
        return data;

    },

    async getOne(userId){
        const url = baseUrl + userId
        console.log(url)
        const result = await fetch(url)
        .then(usr => usr.json())

        return result;
    },

    async searchUser(query){
        return []
    },

    async editUser(userId){

    },


};