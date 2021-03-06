const Dog = require('../domain/dog.domain');
const Cat = require('../domain/cat.domain');

const paz = new Dog('Paz', 'dog', 'f', 2013, 5, 'media/paz.jpg', 'ACD mix');
const violet = new Dog('Violet', 'dog', 'f', 2013, 7, 'media/violet.jpg', 'bull breed mix');
const sunny = new Dog('Sunny', 'dog', 'm', 2010, 9, 'media/sunny.jpg', 'golden/beagle mix');
const kisuke = new Cat('Kisuke', 'cat', 'm', 2016, 5, 'media/cat.png', 'DLH');
const kitten = new Cat('kitten', 'cat', 'm', 2020, 12, 'media/cat.png', 'DSH');

const allPets = [paz, violet, sunny, kisuke, kitten];

module.exports = allPets;