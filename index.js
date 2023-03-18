import Crew from './app/models/Crew.js';
import WriteHTML from './app/html-generator.js';

const crew = new Crew();

await crew.init()

WriteHTML(crew.generateCards());
