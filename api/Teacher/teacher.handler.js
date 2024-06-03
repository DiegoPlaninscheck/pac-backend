const database = require("../../database");

const tableName = 'professor';
const idName = "idProfessor";

async function getTeacher() {
    return await database.get(tableName);
}

async function getTeacherById(id) {
    return await database.getById(tableName, id, idName);
}

async function createTeacher(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data, idName);
}

async function updateTeacher(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteTeacher(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getTeacher,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
}
