var request = require("request");

var options = { method: 'POST',
  url: '${URL}',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"${CLIENT_ID}","client_secret":"${CLIENT_SECRET}","audience":"${AUDIENCE}","grant_type":"${GRANT_TYPE}"}' };

request(options, function (error:any, response:any, body:any) {
  if (error) throw new Error(error);

  console.log(body);
});