const Pet = require('./pets.domain');

class Dog extends Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc, breed) {
        super(name, species, sex, birthYear, birthMonth, imgSrc);
        this._breed = breed;
    }
}

module.exports = Dog;