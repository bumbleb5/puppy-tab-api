// make classes
class Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc, breed) {
        this._name = name;
        this._species = species;
        this._sex = sex;
        this._birthYear = birthYear;
        this._birthMonth = birthMonth;
        this._imgSrc = imgSrc;
        this._breed = breed;
    }
}

module.exports = Pet;