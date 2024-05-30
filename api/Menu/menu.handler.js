const database = require("../../database");

const tableName = 'cardapio';
const idName = "idCardapio";

async function getMenu() {
    return await database.get(tableName);
}

async function getMenuById(id) {
    return await database.getById(tableName, id, idName);
}

async function createMenu(data) {
    console.log("Data= " + data);
    return await database.create(tableName, data);
}

async function updateMenu(data, id) {
    return await database.updateById(tableName, data, id, idName);
}

async function deleteMenu(id) {
    return await database.deleteById(id, tableName, idName);
}

module.exports = {
    getMenu,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
}
