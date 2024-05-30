function returnInsertQuery(table, data) {
    let sqlQuery = `INSERT INTO ${table} `

    switch (table) {
        case "cadastro":
            sqlQuery = sqlQuery + `(numeroCadastro, telefone, idEndereco) VALUES (${data.numeroCadastro}, ${data.telefone}, ${data.idEndereco})`;
            break;

        case "usuario":
            sqlQuery = sqlQuery + `(nomeUsuario, senhaUsuario, idCadastro) VALUES (${data.nomeUsuario}, ${data.senhaUsuario}, ${data.idCadastro})`;
            break;

        case "endereco":
            sqlQuery = sqlQuery + `(cep, rua, bairro, cidade, estado, numero, tipoResidencia) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            break;

        case "aluno":
            sqlQuery = sqlQuery + `(nomeAluno, nomeResponsavelLegal, nascimentoAluno, periodo, fotoAluno, idCadastro) VALUES (${data.nomeAluno}, ${data.nomeResponsavelLegal}, 
                ${data.nascimentoAluno}, ${data.periodo}, ${data.fotoAluno}, ${idCadastro}`;
            break;

        case "cardapio":
            sqlQuery = sqlQuery + `(cardapio, dataCardapio, idAgenda) VALUES (${data.cardapio}, ${data.dataCardapio}, ${data.idAgenda}`;
            break;

        case "turma":
            sqlQuery = sqlQuery + `(nomeTurma, quantidadeAluno, idSala, idAgenda) VALUES (${data.nomeTurma}, ${data.quantidadeAluno}, ${data.idSala}, ${data.idAgenda}`;
            break;

        case "evento":
            sqlQuery = sqlQuery + `(nomeEvento, dataEvento, idAgenda) VALUES (${data.nomeEvento}, ${data.dataEvento}, ${data.idAgenda}`;
            break;

        case "sala":
            sqlQuery = sqlQuery + `(nomeSala, idProfessor) VALUES (${data.nomeSala}, ${data.idProfessor}`;
            break;

        case "professor":
            sqlQuery = sqlQuery + `(nomeProfessor, dataNascimentoProfessor) VALUES (${data.nomeProfessor}, ${data.dataNascimentoProfessor}`;
            break;

        case "agenda":
            sqlQuery = sqlQuery + `() VALUES ()`;
            break;
    }

    return sqlQuery;
}

function returnUpdateQuery(table, data, id, idName) {
    let sqlQuery = `UPDATE ${table} SET `
    let finalQuery = ` WHERE ${idName} = ${id}`

    switch (table) {
        case "cadastro":
            sqlQuery = sqlQuery + `numeroCadastro = ${data.numeroCadastro}, telefone = ${data.telefone}, idEndereco = ${data.idEndereco} ${finalQuery}`;
            break;

        case "usuario":
            sqlQuery = sqlQuery + `nomeUsuario = ${data.nomeUsuario}, senhaUsuario = ${data.senhaUsuario}, idCadastro = ${data.idCadastro} ${finalQuery}`;
            break;

        case "endereco":
            sqlQuery = sqlQuery + `cep = ${data.cep}, rua = ${data.rua}, bairro = ${data.bairro}, cidade = ${data.cidade}, 
            estado = ${data.estado}, numero = ${data.numero}, tipoResidencia = ${data.tipoResidencia} ${finalQuery}`;
            break;

        case "aluno":
            sqlQuery = sqlQuery + `nomeAluno = ${data.nomeAluno}, nomeResponsavelLegal = ${data.nomeResponsavelLegal}, nascimentoAluno = ${data.nascimentoAluno}, 
            periodo = ${data.periodo}, fotoAluno = ${data.fotoAluno}, idCadastro = ${idCadastro} ${finalQuery}`;
            break;

        case "cardapio":
            sqlQuery = sqlQuery + `cardapio = ${data.cardapio}, dataCardapio = ${data.dataCardapio}, idAgenda = ${data.idAgenda} ${finalQuery} `;
            break;

        case "turma":
            sqlQuery = sqlQuery + `nomeTurma = ${data.nomeTurma}, quantidadeAluno = ${data.quantidadeAluno}, idSala = ${data.idSala}, idAgenda =  ${data.idAgenda} ${finalQuery}`;
            break;

        case "evento":
            sqlQuery = sqlQuery + `nomeEvento = ${data.nomeEvento}, dataEvento = ${data.dataEvento}, idAgenda = ${data.idAgenda} ${finalQuery}`;
            break;

        case "sala":
            sqlQuery = sqlQuery + `nomeSala = ${data.nomeSala}, idProfessor = ${data.idProfessor} ${finalQuery}`;
            break;

        case "professor":
            sqlQuery = sqlQuery + `nomeProfessor = ${data.nomeProfessor}, dataNascimentoProfessor = ${data.dataNascimentoProfessor} ${finalQuery}`;
            break;

        case "agenda":
            sqlQuery = sqlQuery + `${finalQuery}`;
            break;
    }

    return sqlQuery;
}

module.exports = {
    returnInsertQuery,
    returnUpdateQuery
}