
//baixa o conteudo json e cria a variavel dados
$.getJSON("model/eventos_listar.php", function (dados) {

    //para cada item em dados gera um valor
    dados.forEach(function (valor) {

        var data = valor.datahora.split(" ");
        var dia = data[0].split("-");
        var hora = data[1].split(":");

        var dataFormatado = dia[2]+"/"+dia[1]+"/"+dia[0];
        var horaFormatado = hora[0]+":"+hora[2];

        //gerando a linha com os dados
        var tr = "<tr>"
            + "<td>" + valor.id + "</td>"
            + "<td>" + valor.nome + "</td>"
            + "<td>" + dataFormatado +", "+ horaFormatado+ "</td>"
            + "<td>" + valor.local + "</td>"
            + "<td>[Editar][Deletar]</td>"
            + "</tr>";

        //adiciona na tabela
        $("#lista-eventos").append(tr);

    }); //fim do forEach

}); //fim do getJSON