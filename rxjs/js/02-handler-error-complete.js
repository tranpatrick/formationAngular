let Observable = Rx.Observable;

// create observable
let values = Observable.create((observer) => {
    try{
        observer.next("Hello"); // permet de push une valeur dans l'observable
        observer.next("World"); 
        observer.complete();
    } catch(e) {
        observer.error(e);
    }
});

values.subscribe(
    // recupere les donnees
    (data) => console.log(data),
    // 2e handler pour recuperer les erreurs
    (error) => console.log(error),
    () => console.log('completed')
);

// next() push des donnees
// subscribe() permet de recevoir des notifications dès que la valeur change dans l'observable

// la difference avec generator de ES6 c'est que le generator renvoie un iterator sur lequel la methode next() recupere (pull) des donnees 
// alors que next() sur un observable push des donnees

