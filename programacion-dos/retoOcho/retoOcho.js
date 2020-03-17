'use strict';

const elements = document.querySelector('element');

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';


elements.innerHTML = `<ul> <li><img width="50px" src=${firstDogImage}> ${firstDogName}</li>
<li><img width="50px" src=${secondDogImage} ${secondDogName}</li> <li>
<img width="50px" src=${thirdDogImage} ${thirdDogName} </li></ul>`;



