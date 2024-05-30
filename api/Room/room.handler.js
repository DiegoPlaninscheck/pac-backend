const database = require("../../database");

const tableName = 'sala';
const idName = "idSala";

async function getRoom() {
    return await database.get(tableName);
}

async function getRoomById(id) {
    return await database.getById(tableName, id, idName);
}

async function createRoom(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateRoom(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteRoom(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getRoom,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
}
