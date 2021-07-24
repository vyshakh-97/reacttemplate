import apikey from "..config";

function get(){
        try{
          const newscontent= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
          );
          return newscontent;
        } catch (error) {
          console.log(error);
        }
};