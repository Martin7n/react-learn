

export default {

    formatDate(rawDate){
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

   
        return new Date(rawDate).toLocaleDateString(undefined, options);

    },



};