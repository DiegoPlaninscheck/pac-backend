const database = require("../../database");
const excel = require("exceljs");

const tableName = 'cadastro';
const idName = "idCadastro";

async function getRegistration() {
    return await database.get(tableName);
}

async function getRegistrationById(id) {
    return await database.getById(tableName, id, idName);
}

async function createRegistration(data) {
    console.log("Data= ", data);
    return await database.create(tableName, data, idName);
}

async function exportToExcel(data) {
    try {

        data = data.cadastros;

        let workbook = new excel.Workbook();

        const sheet = workbook.addWorksheet("Cadastros");

        sheet.columns = [
            { header: "Id", key: "id", width: 30 },
            { header: "Numero cadastro", key: "numero_cadastro", width: 30 },
            { header: "Aluno", key: "aluno", width: 30 },
            { header: "Data nascimento", key: "data_nascimento", width: 30 },
            { header: "Responsavel", key: "responsavel", width: 30 },
            { header: "Telefone", key: "telefone", width: 30 },
            { header: "Email", key: "email", width: 30 },
        ];

        for (let item of data) {
            sheet.addRow({
                id: item.id,
                numero_cadastro: item.numero_cadastro,
                aluno: item.aluno,
                data_nascimento: item.data_nascimento,
                responsavel: item.responsavel,
                telefone: item.telefone,
                email: item.email
            });
        }

        return workbook;

    } catch (err) {
        console.log("Error= ", err);
    }
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
    exportToExcel,
    updateRegistration,
    deleteRegistration
}
