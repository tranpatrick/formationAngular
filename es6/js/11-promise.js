console.log('Je fais une formation Angular');

let myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let message = 'bravo vous etes reçus';
        resolve(message);
        // reject('Desole recale');
    }, 5000);
});

console.log('je sors de ma formation');

myPromise.then((data) => {
    console.log(data);
});

console.log('après plein de choses');