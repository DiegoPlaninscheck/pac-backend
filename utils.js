function returnInsertQuery(table) {
    let sqlQuery = `INSERT INTO ${table} `

    switch (table) {
        case "matricula":
            sqlQuery = sqlQuery + `(nomeCompleto, dataNascimento, nomeResponsavelLegal, emailResponsavelLegal, fotoAluno, rendaFamiliar, periodoEscolar, idEndereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
            break

        case "cadastro":
            sqlQuery = sqlQuery + `(numeroCadastro, telefone, idEndereco) VALUES (?, ?, ?)`;
            break;

        case "usuario":
            sqlQuery = sqlQuery + `(nomeUsuario, senhaUsuario, idCadastro) VALUES (?, ?, ?)`;
            break;

        case "endereco":
            // sqlQuery = sqlQuery + `(cep, rua, bairro, cidade, estado, numero, tipoResidencia) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            sqlQuery = sqlQuery + `(cep, rua, bairro, cidade) VALUES (?, ?, ?, ?)`;
            break;

        case "aluno":
            sqlQuery = sqlQuery + `(nomeAluno, nomeResponsavelLegal, nascimentoAluno, periodo, fotoAluno, idCadastro) VALUES (?, ?, ?, ?, ?, ?)`;
            break;

        case "cardapio":
            sqlQuery = sqlQuery + `(cardapio, dataCardapio, idAgenda) VALUES (?, ?, ?)`;
            break;

        case "turma":
            sqlQuery = sqlQuery + `(nomeTurma, quantidadeAlunos, idSala, idAgenda) VALUES (?, ?, ?, ?)`;
            break;

        case "evento":
            sqlQuery = sqlQuery + `(nomeEvento, dataEvento, idAgenda) VALUES (?, ?, ?)`;
            break;

        case "sala":
            sqlQuery = sqlQuery + `(nomeSala, idProfessor) VALUES (?, ?)`;
            break;

        case "professor":
            sqlQuery = sqlQuery + `(nomeProfessor, dataNascimentoProfessor) VALUES (?, ?)`;
            break;

        case "agenda":
            sqlQuery = sqlQuery + `() VALUES ()`;
            break;
    }

    return sqlQuery;
}

function returnInsertData(table, data) {
    let sqlQuery = "";

    switch (table) {
        case "matricula":
            sqlQuery = [data.nomeCompleto, data.dataNascimento, data.nomeResponsavelLegal, data.emailResponsavelLegal, data.fotoAluno || "", data.rendaFamiliar, data.periodoEscolar, data.idEndereco]
            break

        case "cadastro":
            sqlQuery = [data.numeroCadastro, data.telefone, data.idEndereco];
            break;

        case "usuario":
            sqlQuery = [data.nomeUsuario, data.senhaUsuario, data.idCadastro];
            break;

        case "endereco":
            // sqlQuery = [data.cep, data.rua, data.bairro, data.cidade, data.estado, data.numero, data.tipoResidencia];
            sqlQuery = [data.cep, data.rua, data.bairro, data.cidade];
            break;

        case "aluno":
            sqlQuery = [data.nomeAluno, data.nomeResponsavelLegal, data.nascimentoAluno, data.periodo, data.fotoAluno, data.idCadastro];
            break;

        case "cardapio":
            sqlQuery = [data.cardapio, data.dataCardapio, data.idAgenda];
            break;

        case "turma":
            sqlQuery = [data.nomeTurma, data.quantidadeAlunos, data.idSala, data.idAgenda];
            break;

        case "evento":
            sqlQuery = [data.nomeEvento, data.dataEvento, data.idAgenda];
            break;

        case "sala":
            sqlQuery = [data.nomeSala, data.idProfessor];
            break;

        case "professor":
            sqlQuery = [data.nomeProfessor, data.dataNascimentoProfessor];
            break;

        case "agenda":
            sqlQuery = [];
            break;
    }

    return sqlQuery;
}

function returnUpdateQuery(table, data, id, idName) {
    let sqlQuery = `UPDATE ${table} SET `
    const finalQuery = ` WHERE ${idName} = ${id}`

    switch (table) {
        case "cadastro":
            sqlQuery = sqlQuery + `numeroCadastro = ${data.numeroCadastro}, telefone = ${data.telefone}, idEndereco = ${data.idEndereco} ${finalQuery}`;
            break;

        case "usuario":
            sqlQuery = sqlQuery + `nomeUsuario = ${data.nomeUsuario}, senhaUsuario = ${data.senhaUsuario}, idCadastro = ${data.idCadastro} ${finalQuery}`;
            break;

        // !!!!!!!!!!!! forma correta, esta dando certo !!!!!!!!!!!!
        case "endereco":
            sqlQuery = sqlQuery + `cep = ${data.cep}, rua = "${data.rua}", bairro = "${data.bairro}", cidade = "${data.cidade}", estado = "${data.estado}", numero = "${data.numero}", tipoResidencia = "${data.tipoResidencia}" ${finalQuery}`;
            break;

        case "aluno":
            sqlQuery = sqlQuery + `nomeAluno = ${data.nomeAluno}, nomeResponsavelLegal = ${data.nomeResponsavelLegal}, nascimentoAluno = ${data.nascimentoAluno}, 
            periodo = ${data.periodo}, fotoAluno = ${data.fotoAluno}, idCadastro = ${idCadastro} ${finalQuery}`;
            break;

        case "cardapio":
            sqlQuery = sqlQuery + `cardapio = ${data.cardapio}, dataCardapio = ${data.dataCardapio}, idAgenda = ${data.idAgenda} ${finalQuery} `;
            break;

        case "turma":
            sqlQuery = sqlQuery + `nomeTurma = ${data.nomeTurma}, quantidadeAlunos = ${data.quantidadeAlunos}, idSala = ${data.idSala}, idAgenda =  ${data.idAgenda} ${finalQuery}`;
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
    returnInsertData,
    returnUpdateQuery
}