const database = require("../../database");

const tableName = 'turma';
const idName = "idTurma";

async function getClass() {
    return await database.get(tableName);
}

async function getClassById(id) {
    return await database.getById(tableName, id, idName);
}

async function createClass(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateClass(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteClass(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getClass,
    getClassById,
    createClass,
    updateClass,
    deleteClass
}
