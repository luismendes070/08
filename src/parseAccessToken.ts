import cors from 'cors';
const express = require('express');
const app = express();
app.use(cors());
const { auth } = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: '${AUDIENCE}',
  issuerBaseURL: '${ISSUER_BASE_URL}',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req: any, res: { send: (arg0: string) => void; }) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);