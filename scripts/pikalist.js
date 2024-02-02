import { getPikamon } from "./database.js";

export const pikaList = () => {
  const pikamons = getPikamon();

  let htmlString = '<article class="totem">';

  for (const pikamon of pikamons) {
    htmlString += `<section class="piko-card">
        <div><img class="piko-img" src=${pikamon.imageUrl}></img></div>
        <div class="piko-name">Name: ${pikamon.name}</div>
        <div class="piko-category">Category: ${pikamon.category}</div>
        <div class="piko-abilities">Abilities: ${pikamon.abilities}</div>
        <div class="piko-weakness">Weakness: ${pikamon.weakness}</div>
        </section>`;
  }
  htmlString += `</article>\n`;

  return htmlString;
};
