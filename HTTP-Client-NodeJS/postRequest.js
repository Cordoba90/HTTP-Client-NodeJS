const https = require('https');

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/users',
    method: 'POST',
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
    }

};
const requestData = {}


let request = https.request(options,  (res) => {
    if (res.statusCode !== 201) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }    
    
});
request.write(JSON.stringify(requestData));
request.end()

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});
