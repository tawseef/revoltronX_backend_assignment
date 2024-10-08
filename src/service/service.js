const axios = require("axios");

const getData = async () => {
    try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.APIKEY}`)
        if(response) return response.data;
    }catch(error){
        throw error
    }
    
}

module.exports = {getData}