const database = require("../../database");

const tableName = 'endereco';
const idName = "idEndereco";

async function getAddress() {
    return await database.get(tableName);
}

async function getAddressById(id) {
    return await database.getById(tableName, id, idName);
}

async function createAddress(data) {
    return await database.create(tableName, data, idName);
}

async function updateAddress(data, id) {
    console.log("Data= " , data);
    return await database.updateById(tableName, data, id, idName);
}

async function deleteAddress(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getAddress,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress
}
