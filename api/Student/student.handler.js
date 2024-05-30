const database = require("../../database");

const tableName = 'aluno';
const idName = "idAluno";

async function getStudent() {
    return await database.get(tableName);
}

async function getStudentById(id) {
    return await database.getById(tableName, id, idName);
}

async function createStudent(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateStudent(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteStudent(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
