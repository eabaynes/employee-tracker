// import promises from fs module
import { promises as fs } from 'fs';

// function to generate HTML
function generateHTML(cards) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css"/>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>Team Profile</title>
        </head>
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
              ${cards}
            </div>
          </div>
        </div>
      </body>
    </html>`;
  }

// exportable function to be used in index.js
export default async function WriteHTML(cardsHTML) {
    // create a variable to store the HTML
    const html = generateHTML(cardsHTML);
    // write the HTML to the file
    await fs.writeFile('./index.html', html);
  };