

const baseUrl = 'http://localhost:3030/';


const authService = {
      register(formData){
        const reqUrl = `${baseUrl}users/register`
        console.log(reqUrl, formData)
        const {email, password} = formData;

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        };

        return fetch(reqUrl, options);

        // const response =  fetch(reqUrl, options);

        // if (response.ok != true){
        //     const error =  response.json();
        //     throw new Error(error.message);
        // }

        // const data =  response.json();
        // console.log(data)
        
    },


    async login(formData){

        const {email, password} = formData;
        console.log(email, password)

        const reqUrl = `${baseUrl}users/login`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

    // const response =  fetch(reqUrl, options);
    return fetch(reqUrl, options);

        
    },
};

export default authService;