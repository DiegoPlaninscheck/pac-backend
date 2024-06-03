const database = require("../../database");

const tableName = 'cadastro';
const idName = "idCadastro";

async function getRegistration() {
    return await database.get(tableName);
}

async function getRegistrationById(id) {
    return await database.getById(tableName, id, idName);
}

async function createRegistration(data) {
    console.log("Data= " , data);
    return await database.create(tableName, data, idName);
}

async function updateRegistration(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteRegistration(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getRegistration,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
}
