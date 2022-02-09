import { dragons } from '../data.js';
import { findById } from '../utils.js';

// console.log('is this working?');

const dragonName = document.getElementById('dragon-name');
const dragonAge = document.getElementById('dragon-age');
const dragonAbility = document.getElementById('dragon-ability');
const dragonWeakness = document.getElementById('dragon-weakness');
const dragonImage = document.getElementById('dragon-image');

const params = new URLSearchParams(window.location.search);
const dragon = findById(params.get('id'), dragons);
// console.log(dragons);
// console.log(params.get(3, 'id'));
// console.log(dragon);

dragonName.textContent = dragon.name;
dragonAge.textContent = `Age ${dragon.age}`;
dragonAbility.textContent = dragon.ability;
dragonWeakness.textContent = dragon.weakness;
dragonImage.src = `.${dragon.image}`;
