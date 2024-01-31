import { getpikamon } from './database.js'

export const pikaList = () => {
const pikamons = getpikamon()

let htmlString = '<artcile class="totem">'

for (const pikamon of pikamons) {
    htmlString += `<section class="column">
        <div class="pikamonsters">${pikamon.imageUrl}</div>
        <div class="pikamonsters">${pikamon.name}</div>
        <div class="pikamonsters">${pikamon.category}</div>
        <div class="pikamonsters">${pikamon.abilities}</div>
        <div class="pikamonsters">${pikamon.weakness}</div>
        </section>`


}
htmlString += `</article>\n`

return htmlString
}