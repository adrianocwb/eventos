
//baixa o conteudo json e cria a variavel dados
$.getJSON("model/eventos_listar.php", function (dados) {

    //para cada item em dados gera um valor
    dados.forEach(function (valor) {

        //gerando a linha com os dados
        var tr = "<tr>"
            + "<td>" + valor.id + "</td>"
            + "<td>" + valor.nome + "</td>"
            + "<td>" + valor.datahora + "</td>"
            + "<td>" + valor.local + "</td>"
            + "<td>[Editar][Deletar]</td>"
            + "</tr>";

        //adiciona na tabela
        $("#lista-eventos").append(tr);

    }); //fim do forEach

}); //fim do getJSON