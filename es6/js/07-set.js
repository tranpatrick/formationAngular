brands = new Set().add('Honda').add('Mercedes').add('Ferrari').add('Honda').add('Toyota');

console.log(brands);
console.log('------------------');

// Créer un Set directement à partir d'un tableau
let brandsArray = ['Honda', 'Ducatti', 'Toyota', 'Honda'];
let brands2 = new Set(brandsArray);
console.log(brands2);

// Methode pour tester si un set contient une valeur
console.log(brands2.has('Honda')) // CASE SENSITIVE

// Methode pour supprimer une entree
console.log(brands.delete('honda')) // return false
console.log(brands.delete('Honda')) // supprime et return true

console.log('------------------');

// Methode forEach
brands.forEach(function(val1, val2, val3) { 
    console.log(val1); // cle
    console.log(val2); // valeur
    console.log(val3); // le set lui même
});