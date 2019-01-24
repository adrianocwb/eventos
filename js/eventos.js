
//baixa o conteudo json e cria a variavel dados
$.getJSON("model/eventos_listar.php", function(dados){
    
    // para cada item em dados gera um valor
    dados.forEach(function(valor){

        var data = valor.datahora.split(" ");
        var dia = data[0].split("-");
        var hora = data[1].split(":");

        var dataFormatado = dia[2]+"/"+dia[1]+"/"+dia[0];
        dataFormatado += " "+hora[0]+":"+hora[1];

        // gerando a linha com o dados
        var tr = "<tr>"
            +"<td>"+ valor.id +"</td>"
            +"<td>"+ valor.nome +"</td>"
            +"<td>"+ dataFormatado +"</td>"
            +"<td>"+ valor.local +"</td>"
            +"<td>[Editar] [Deletar]</td>"
            +"</tr>";
        
        // adiciona na tabela    
        $("#lista-eventos").append(tr);

    }); // fim do forEach

}); // fim do getJSON

// enviar o form
$("#btn-salvar").click(function(){

    var erro = false;

    //verifica cada input do formulario
    $('#form-eventos input').each(function(el){
        $(this).removeClass("is-invalid");
        
        if ($(this).val() == "")
        {
            erro = true;
            $(this).addClass("is-invalid");
        }
    });

    if (erro == false)
    {
        $("#form-eventos").submit();
    }
    
});

//formata data no input
$("#input-datahora").datepicker({
    format: "dd/mm/yyyy",
    startDate: "today",
    language: "pt-BR",
    todayHighlight: true
});

// mascara do valor do preço
$("#input-preco").mask('000.000,00', {reverse: true});