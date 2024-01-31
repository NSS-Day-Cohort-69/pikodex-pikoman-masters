import { getpikamon } from './database.js'

export const pikaList = () => {
const pikamons = getpikamon()

let htmlString = '<artcile class="totem">'

for (const pikamon of pikamons) {
    htmlString += `<section class="column">
        <div class="piko-img">${pikamon.imageUrl}</div>
        <div class="piko-name">${pikamon.name}</div>
        <div class="piko-category">${pikamon.category}</div>
        <div class="piko-abilities">${pikamon.abilities}</div>
        <div class="piko-weakness">${pikamon.weakness}</div>
        </section>`


}
htmlString += `</article>\n`

return htmlString
}