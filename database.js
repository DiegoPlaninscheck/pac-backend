const mysql = require("mysql2");

const { returnInsertQuery, returnInsertData, returnUpdateQuery } = require("./utils");

const dotenv = require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}).promise();


async function get(table) {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    return rows;
}

async function getById(table, id, idName) {
    const [rows] = await pool.query(`SELECT * FROM ${table} WHERE ${idName} = ${id}`);
    return rows;
}

async function getRegistrationAddress(firstTable, secondTable) {
    const [rows] = await pool.query(`SELECT * FROM ${firstTable} JOIN ${secondTable} ON ${firstTable}.idEndereco = ${secondTable}.idEndereco`);
    console.log(rows);
    return rows;
}

async function create(table, data, idName) {
    const sqlQuery = returnInsertQuery(table);

    const [result] = await pool.query(sqlQuery, returnInsertData(table, data));

    return getById(table, result.insertId, idName);
}

async function updateById(table, data, id, idName) {
    const sqlQuery = returnUpdateQuery(table, data, id, idName);

    const [result] = await pool.query(sqlQuery);

    console.log(result);

    return getById(table, id, idName);
}

async function deleteById(id, table, idName) {
    const [result] = await pool.query(`DELETE FROM ${table} WHERE ${idName} = ${id}`);
    return { "idDeleted": id, "result": result };
}

module.exports = {
    get,
    getById,
    getRegistrationAddress,
    create,
    updateById,
    deleteById
}