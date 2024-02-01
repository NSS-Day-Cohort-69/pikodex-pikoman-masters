const container = document.querySelector('#container')

import { pikaList } from "./pikalist.js"

const getPikaList = pikaList()

container.innerHTML = getPikaList
