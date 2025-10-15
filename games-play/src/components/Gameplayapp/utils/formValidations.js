

function formsValiadations(formData){
    const data = Object.values(formData)
       
    const errorList = []

        for (const key in data) {
            if (!Object.hasOwn(data, key)) continue;
            const element = data[key];
            if (element.trim()=="") {
            errorList.push(key);
            }
    }

     return errorList;

    
    
        
        
    
}

export default formsValiadations;