/**
Like we did in the joke.js file, we are first going to bring in our dependencies. Only this time, our dependencies include something we wrote! To do that we simply use require() to point to the location of the file we wish to bring in.

We also bring in @actions/core so that we can set the output of our action.

Next we write another asynchronous JavaScript function that stores the return value of getJoke() in a variable called joke.

Then we log the joke to the console.

Finally we finish the function with by setting the contents of the joke as the value of the joke-output output parameter. We will use this output later in the course. Don't forget to call the run() function.
 */
const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();