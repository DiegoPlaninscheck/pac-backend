const database = require("../../database");

const tableName = 'agenda';
const idName = "idAgenda";

async function getCalendar() {
    return await database.get(tableName);
}

async function getCalendarById(id) {
    return await database.getById(tableName, id, idName);
}

async function createCalendar(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateCalendar(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteCalendar(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getCalendar,
    getCalendarById,
    createCalendar,
    updateCalendar,
    deleteCalendar
}
