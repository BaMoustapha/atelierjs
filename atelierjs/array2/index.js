let fruits = ['Apple', 'Banana'];

console.log(fruits.length);


let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana


fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });

  let newLength = fruits.push('Orange');

  let last = fruits.pop();

  let first = fruits.shift();

  let newLength = fruits.unshift('Strawberry')

  fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana');
// 1

let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);

let shallowCopy = fruits.slice();

let arr = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(arr[0]);             // affiche "le premier élément"
console.log(arr[1]);             // affiche "le deuxième élément"
console.log(arr[arr.length - 1]);

let années = [1950, 1960, 1970, 1980, 1990, 2000, 2010];

console.log(années[0]); 

renderer["3d"].setTexture(model, "personnage.png");

console.log(années["2"] != années["02"]); 

let promise = {
    'var' : 'text',
    'array': [1, 2, 3, 4]
  };
  
  console.log(promise['var']);

  
let fruits = [];
fruits.push("banane", "pomme", "pêche");

console.log(fruits.length); // 3

fruits[5] = "mangue";
console.log(fruits[5]);  // "mangue"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6 

fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);  // 10

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length);

let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);