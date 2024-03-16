const axios = require("axios");

const options = { 
  method: "GET",
  url: "${URL}",
  headers: { "authorization": "Bearer TOKEN" },
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });