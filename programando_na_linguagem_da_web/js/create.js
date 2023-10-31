var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        idade: form.idade.value,
        estadoCivil: form.civil.value
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTd(paciente.idade, "info-idade"));
    pacienteTr.appendChild(montaTd(paciente.estadoCivil, "info-civil"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaNumero(valor) {
    if (typeof(valor) == 'string') {
        return true;
    } else {
        return false;
    }
}

function validaPaciente(paciente) {

    var erros = [];

    // leves alterações nas verificações de valores feitas por mim e não estão no curso
    if (paciente.nome.length <= 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura <= 0) {
        erros.push("A gordura não pode ser em branco ou números negativos");
    }

    if (paciente.peso <= 0 ) {
        erros.push("O peso não pode ser em branco ou números negativos");
    }

    if (paciente.altura <= 0) {
        erros.push("A altura não pode ser em branco ou números negativos");
    }
    if (paciente.idade <= 0) {
        erros.push("A idade não pode ser em branco ou números negativos");
    }
    if (paciente.estadoCivil == "Selecione uma das opções") {
        erros.push("O estado civil não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido (Não é aceito letra)");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida (Não é aceito letras. Utilize .)");
    }

    if (!validaNumero(paciente.idade)) {
        erros.push("Idade é inválida (Não é aceito letras)")
    }

    if (!validaNumero(paciente.gordura)) {
        erros.push("Gordura é inválida (Não é aceito letras)")
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
