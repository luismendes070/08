const axios = require("axios");

const options = { 
  method: "GET",
  url: "${API}",
  headers: { "authorization": "Bearer TOKEN" },
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });