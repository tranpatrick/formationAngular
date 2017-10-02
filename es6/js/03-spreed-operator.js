// en ES5
var fruits = ['bananes', 'pommes'];
var vegetables = ['poireaux', 'carottes'];

// on obtient un tableau à 2 dimensions
var food = [fruits, vegetables];

// pour obtenir un tableau à une dimension à partir de 2 tableaux
let food2 = [...fruits, ...vegetables]; // => food2 = ['bananes', 'pommes', 'poireaux', 'carottes']

// combiner avec d'autres string
let food3 = [...fruits, ...vegetables, 'navets'];



// utiliser les spreed operator dans une fonction
// en ES5
var mixer = function(ing1, ing2) {
    console.log(ing1 + " avec " + ing2);
}

// en ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + " avec " + ing2);
mixer2('banane', 'poire');

// avec un spreed operator
let ingredients = ['carotte', 'fraise'];
mixer2(...ingredients);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3(ingredients, 'fraises');


//Pour résumer: spreed operator permet de convertir les tableaux en string, et de mettre comme en java autant d'arguments que l'on veut