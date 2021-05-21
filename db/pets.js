const knex = require('./knex');
const petProcessor = require('../domain/addPet.domain');

function createPet(pet) {
    const newPet = petProcessor(pet);
    return knex('pets').insert(newPet);
}

function getAllPets() {
    return knex('pets').select('*');
}

function getPet(id) {
    return knex('pets').select('*').where('id', id);
}

function deletePet(id) {
    return knex('pets').select('id', id).del();
}

function updatePet(id, pet) {
    const updatedPet = petProcessor(pet);
    return knex('pets').where('id', id).update(updatedPet);
}

module.exports = {
    createPet,
    getAllPets,
    deletePet,
    updatePet,
    getPet
}