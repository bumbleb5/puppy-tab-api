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
}

function createEvent(event) {
    event.eventId = uuidv4();
    return knex('events').insert(event);
}

module.exports = {
    createEvent
};