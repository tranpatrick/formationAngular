let books = new Map();

books.set('Umberto Eco', 'Le nom de la rose');
books.set('JK Rowing', 'Harry Potter');
books.set('Tozbook', 'Tozozozoz');

console.log(books.size);
console.log(books);
console.log(books.get('Tozbook'));

books.forEach(function(val, cle, map) {
    console.log(cle);
});

console.log(books.keys());
console.log(books.values());
console.log(books.entries());

