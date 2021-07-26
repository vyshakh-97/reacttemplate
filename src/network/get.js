import apikey from "..config";
import axios from "axios";

async function get(){
        try{
          const newscontent= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
          );
          return newscontent;
        } catch (error) {
          console.log(error);
        }
};

function post(){
  axios.post(url,{data})
  .then((data) => console.log(data.data));
}

async function put(){
  const res = await axios.put(url,data);
}

function del(){
  axios.delete(url)
    .then(() => console.log("deleted"));
}