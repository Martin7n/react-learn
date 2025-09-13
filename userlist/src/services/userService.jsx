

const baseUrl = 'http://localhost:3030/jsonstore/';

export default {

    
    async getAllUsers(){

        const result = await fetch(baseUrl+'users').then(usrs => usrs.json())
        const data =  Object.values(result);
        return data;

    },

};