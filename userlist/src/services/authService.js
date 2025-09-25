

const baseUrl = 'http://localhost:3030/';


const authService = {
    async  register(formData){
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

        const response = await fetch(reqUrl, options);

        if (response.ok != true){
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        console.log(data)



        
    },


    async login(formData){

        const {email, password} = formData;

        const reqUrl = `${baseUrl}users/login`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }

    const response = await fetch(reqUrl, options);

        
    },
};

export default authService;