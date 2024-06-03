const database = require("../../database");

const tableName = 'usuario';
const idName = "idUsuario";

async function getUser() {
    return await database.get(tableName);
}

async function getUserById(id) {
    return await database.getById(tableName, id, idName);
}

async function createUser(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data, idName);
}

async function updateUser(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteUser(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
