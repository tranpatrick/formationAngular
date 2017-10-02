let Observable = Rx.Observable;

// create observable
let values = Observable.create((observer) => {
    observer.next("Hello"); // permet de push une valeur dans l'observable
    observer.next("World"); 
    setTimeout(() => console.log('Hello les amis !!'), 2000);
});

values.subscribe((data) => console.log(data));

// next() push des donnees
// subscribe() permet de recevoir des notifications dès que la valeur change dans l'observable

// la difference avec generator de ES6 c'est que le generator renvoie un iterator sur lequel la methode next() recupere (pull) des donnees 
// alors que next() sur un observable push des donnees

