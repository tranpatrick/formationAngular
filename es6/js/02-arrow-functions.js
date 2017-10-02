//fonction simple en ES5
var arrowf1 = function() {
    console.log('salut');
}
arrowf1();


//fonction simple en ES6
let arrowf2 = () => {
    console.log('salut');
}
let arrowf3 = () => console.log('salut');
arrowf3();


// fonctions avec arguments en ES5
var fparam = function(arg1) {
    console.log('salut' + arg1);
}


// fonctions avec arguments en ES6
var fparam = (arg1) => console.log('salut' + arg1);


// fonction avec objet en ES5
var dog1 = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    getToys: function() {
        this.toys.forEach(function(toy){
            var self = this;
             var sentence = self.name + " joue avec 1 " + toy;
             console.log(sentence);
        })
    }
}

console.log(dog1.getToys());

// fonction avec objet en ES6
let dog2 = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    getToys: function() {
        this.toys.forEach((toy) => {
             var sentence = this.name + " joue avec 1 " + toy;
             console.log(sentence);
        })
    }
}

console.log(dog2.getToys());