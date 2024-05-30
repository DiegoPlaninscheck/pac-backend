const database = require("../../database");

const tableName = 'evento';
const idName = "idEvento";

async function getEvent() {
    return await database.get(tableName);
}

async function getEventById(id) {
    return await database.getById(tableName, id, idName);
}

async function createEvent(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateEvent(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteEvent(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getEvent,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
}
