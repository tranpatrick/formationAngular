// en ES5
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('BMW', 'Rouge');
console.log(myCar);

Car.prototype.klaxone = function() {
    console.log('tuuuuut');
}

myCar.klaxone();

console.log('---------------------------')


//ES6
class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    klaxone() {
        console.log('taaaaaat');
    }
}

let myVehicule = new Vehicule('Mercedes', 'Black');
console.log(myVehicule);
myVehicule.klaxone();


class VoitureDeCourse extends Vehicule {
    constructor(brand, color, vitesse) {
        super(brand, color);
        this.vitesse = vitesse;
    }

    turbo() {
        console.log('mise en route du turbo');
    }

    klaxone() {
        console.log('tatt');
    }
}


let voitureDeCourse = new VoitureDeCourse('Bugatti', 'Orange', '300');
console.log(voitureDeCourse);