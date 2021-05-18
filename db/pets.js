const knex = require('./knex');

function createPet(pet) {
    return knex('pets').insert(pet);
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
    return knex('pets').where('id', id).update(pet);
}

module.exports = {
    createPet,
    getAllPets,
    deletePet,
    updatePet,
    getPet
}