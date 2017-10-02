let fruits = new Set().add('Pomme').add('Poire').add('Bananes');
let fruitsEntriesIterator = fruits.entries();

console.log(fruitsEntriesIterator);
console.log(fruitsEntriesIterator.next());
console.log(fruitsEntriesIterator.next());
console.log(fruitsEntriesIterator.next());