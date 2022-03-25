// import functions and grab DOM elements
import { dragons } from './data.js';
import { renderDragons } from './renderutils.js';

const dragonList = document.getElementById('dragon-list');

for (let dragon of dragons) {
    const li = renderDragons(dragon);
    dragonList.append(li);
}
