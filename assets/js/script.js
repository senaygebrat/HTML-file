const fs = require('fs')
const inquirer = require('inquirer')


inquirer.prompt([{
  message: "What is your name?",
  name: "name",
},
{
  message: "Where are you from?",
  name: "location",
},
{
  message: "What is your favorite hobby?",
  name: "hobby",
},
{
  message: "What is your LinkedIn URL?",
  name: "Liurl",
},
{
  message: "What is your Github username?",
  name: "GhUsername",
}
]).then((response) => {
  const generatedHtml = 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>HTML Generator</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-4">HTML Generator</h1>
      <p class="lead">Hi, my name is ${response.name}</p>
      <hr class="my-4" />
      <p>Bio: ${response.location}</p>
      <p>Favorite Hobby: ${response.hobby}</p>
      <p>
        Contact Info:
        <li><a href="https://github.com/${response.GhUsername}">Github: </a></li>
        <li><a href="${response.username}">LinkedIn: </a></li>
      </p>
    </div>
  </body>
</html>`
fs.writeFile('../../index.html', generatedHtml, (err) => {
  if(err){
    throw err
  }
  else {
    console.log('success!')
  }
})
})


