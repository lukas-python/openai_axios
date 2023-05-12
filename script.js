// Axios Library
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
    headers:{
        Authorization: "Bearer " + apiKey,
    },
});

const params = {
    prompt: "Tell me the date of begginning of Poland as a state",
    model: "text-davinci-003",
    max_tokens: 10,
    temperature: 0.7,
}

client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) =>{
        console.log(result.data.choices[0].text);
    })
    .catch((err) => {
        console.log(err);
    });


// const {Configuration, OpenAIApi} = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
//
// const openai = new OpenAIApi(configuration);
// try {
//     const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Tell me the date of begginning of Poland as a state",
//     });
//     console.log(completion.data.choices[0].text);
// } catch (error){
//     if (error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//     }
//     else{
//         console.log(error.message);
//     }
// }


