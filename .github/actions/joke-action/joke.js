/*
We first bring in the request-promise library that we installed earlier using npm.

Next we define a set of options that the request-promise library will use when it makes the request.

Read more about request-promise

Inside of the options block we add a key named headers. This defines the HTTP headers that the icanhazdadjoke API expects in each request that comes it's way.

icanhazdadjoke cares the most about the keys, Accept and User-Agent, so we need to make sure we fill them in.

Next we define an asynchronous JavaScript function to make the request for us, storing the JSON Object that is returned in a variable named res.

Lastly, we return the res.joke which is only the value associated with the joke key of the JSON Object. This value will be random every time our action runs because of how we are interacting with the icanhazdadjoke API.

This file finishes up by exporting the newly created function so that we can use it in our main.js file.
*/
const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;