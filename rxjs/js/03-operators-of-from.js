// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

// create observable
let values = Observable.of('Hello', 'World', 2017);

// souscription
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log("completed !")
);

// l'operateur "of" cree un observable qui emet toutes les valeurs passees en arguments les unes apres les autres et qui termine
// par emettre une notification pour le complete

// creer un observable a partir d'un tableau

let fruitsArray = ['faises', 'pommes', 'bananes'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log("completed !")
);

// creer un observable avec l'operator from depuis une promise
// on va utiliser l'api github pour récupérer les emojijs
let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));
emojisObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log("completed !")
);