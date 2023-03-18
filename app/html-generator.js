// import promises from fs module
import { promises as fs } from 'fs';

// function to generate html document from the employee card template
const generateHTML = (cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>Team Profile</title>
        </head>
        <body>
        <header>
        <h1 class="text-center">Here is Your Team!</h1>
        </header>
        <main>
        <div class="container">
        <div class="row">
        <div class="col-12 d-flex justify-content-center">
        ${cards}
        </div>
        </div>
        </div>
        </main>
        </body>
        </html>`;
};

// exportable function to be used in index.js
export default async (cards) => {
    // write the html document to the output folder
    await fs.writeFile('./index.html', generateHTML(cards))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};