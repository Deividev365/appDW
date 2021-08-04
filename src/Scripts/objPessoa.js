var form = document.getElementById("form");

var ano_atual = new Date().getFullYear();


form.addEventListener("submit", (e) => {
   
    var capturarName = "";
    var capturarCpf = "";
    var capturarDate = "";


    capturarName = document.getElementById('name').value;
    capturarCpf = document.getElementById('cpf').value;
    capturarDate = document.getElementById('data_nascimento').value

    document.getElementById('digito_nome').innerHTML = "Nome: " + capturarName;
    document.getElementById('digito_cpf').innerHTML = "CPF: " + capturarCpf;

    

    var calc = ano_atual - capturarDate
    
    
    document.getElementById('digito_nascimento').innerHTML = "Idade: " +  calc + " Anos";


    e.preventDefault();
})