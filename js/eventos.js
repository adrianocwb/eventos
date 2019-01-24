
function listaEventos()
{
//Limpa todos os elementos
$("#lista-eventos").empty();


//baixa o conteudo json e cria a variavel dados
$.getJSON("model/eventos_listar.php", function (dados) {

    // para cada item em dados gera um valor
    dados.forEach(function (valor) {

        var data = valor.datahora.split(" ");
        var dia = data[0].split("-");
        var hora = data[1].split(":");

        var dataFormatado = dia[2] + "/" + dia[1] + "/" + dia[0];
        dataFormatado += " " + hora[0] + ":" + hora[1];

        // gerando a linha com o dados
        var tr = "<tr>"
            + "<td>" + valor.id + "</td>"
            + "<td>" + valor.nome + "</td>"
            + "<td>" + dataFormatado + "</td>"
            + "<td>" + valor.local + "</td>"
            + "<td>[Editar] [Deletar]</td>"
            + "</tr>";

        // adiciona na tabela    
        $("#lista-eventos").append(tr);

    }); // fim do forEach

}); // fim do getJSON

} //fim function listaEventos

// enviar o form
$("#btn-salvar").click(function () {

    var erro = false;

    //verifica cada input do formulario
    $('#form-eventos input').each(function (el) {
        $(this).removeClass("is-invalid");

        if ($(this).val() == "") {
            erro = true;
            $(this).addClass("is-invalid");
        }
    });  //fim do each

    if (erro == false) {
        
        var datahora = $("#input-datahora").val();
        var nova = datahora.split("/");
        var formatado = nova[2]+"-"+nova[1]+"-"+nova[0];

        var preco = $("#input-preco").val();
        var novopreco = preco.replace(",",".");

        var dados = {
            nome: $("#input-nome").val(),
            local: $("#input-local").val(),
            datahora: formatado,
            descricao: $("#text-descricao").val(),
            preco: novopreco
        };

        //Envia os dados fo formulario via ajax
        $.post("model/eventos_cadastrar.php", dados, function (retorno, status) {
        
            //Esconde o form modal
            $("#cadastrar-evento").modal('hide')
            //Exibe o alert com a mensagem de sucesso
            $("#alert-cadastro").show();
            //Limpa todos os inputs
            $('#form-eventos input').val("");
            //Carrega e exibe todos os itens cadastrados
            listaEventos();

        }); //fim do post
    } //fim do if

}); //fim do button click

//formata data no input
$("#input-datahora").datepicker({
    format: "dd/mm/yyyy",
    startDate: "today",
    language: "pt-BR",
    todayHighlight: true
});

// mascara do valor do preço
$("#input-preco").mask('000.000,00', { reverse: true });

//Executa a listagem
listaEventos();