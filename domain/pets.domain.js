// make classes
class Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc) {
        this._name = name;
        this._species = species;
        this._sex = sex;
        this._birthYear = birthYear;
        this._birthMonth = birthMonth;
        this._imgSrc = imgSrc;
    }
}

module.exports = Pet;