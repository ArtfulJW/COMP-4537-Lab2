/*
To create a Node project, we must install express and body-parser packages
Make sure NodeJS is at least V.18
"npm init"
"npm install express body-parser"
*/

// Module Import
const express = require('express');
const bodyParser = require('body-parser');
const { appendFile } = require('fs');

// Define Port
const port = 8000;

// Create Express App
const app = express();

// Configure App to use body-parser middleware
// ..
// app.use(express.bodyParser());

// May need in the future.
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

// Define Routes
app.get('/', function(request, response){
    response.sendFile(__dirname + "/index.html");
    console.log("Serving up HTML.")
})

app.post('/chatbot', async (request, response) => {
    const message = request.body.message;
    const number = message.match(/\d+/);

    console.log(`Pulling API Response for ${number}`);
    const API_CALL = await fetchNumber(number);
    console.log("Finished API_CALL: \n" + API_CALL);
    response.send(API_CALL);

})

function fetchNumber(number){
    const API_URL = `http://numbersapi.com/${number}`
    console.log(`Requesting API for the number ${number}`);
    fetch(API_URL).then(response => response.text()).then(data =>{
        console.log("==Recieved API Message== \n" + data);
        recievedAPICALL = data;
    }).catch(error =>{
        console.log(error);
        recievedAPICALL =  "error";
    });
}


app.listen(port, () =>{
    console.log(`Listening on ${port}.`);
});