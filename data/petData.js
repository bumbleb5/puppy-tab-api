const Dog = require('../domain/dog.domain');
const Cat = require('../domain/cat.domain');

const paz = new Dog('Paz', 'dog', 'f', 2013, 5, '../../../../public/media/paz.jpg', 'ACD mix');
const violet = new Dog('Violet', 'dog', 'f', 2013, 7, '../../../../public/media/violet.jpg', 'bull breed mix');
const sunny = new Dog('Sunny', 'dog', 'm', 2010, 9, '../../../../public/media/sunny.jpg', 'golden/beagle mix');
const kisuke = new Cat('Kisuke', 'cat', 'm', 2016, 5, '../../../../public/media/cat.png', 'DLH');
const kitten = new Cat('APIWORKS', 'cat', 'm', 2020, 12, '../../../../public/media/cat.png', 'DSH');

const allPets = [paz, violet, sunny, kisuke, kitten];

module.exports = allPets;