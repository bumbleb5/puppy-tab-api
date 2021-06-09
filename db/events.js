const knex = require('./knex');
const util = require('./util');
const { uuidv4 } = require('./util');
// make classes

class Event {
    eventId;
    eventType;
    petId;
    eventDate;
    eventNotes;
    totalPrice;
    providerName;
    medication;
}

function createEvent(event) {
    event.eventId = uuidv4();
    return knex('events').insert(event);
}

function getAllPetEvents(petId) {
    return knex('events').select('*').where('petId', petId);
}

function getEvent(eventId) {
    return knex('events').select('*').where('eventId', eventId);
}

module.exports = {
    createEvent,
    getAllPetEvents,
    getEvent
};