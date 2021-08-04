const form = document.getElementById('form');


form.addEventListener("submit", () => {

    const timeValue = "1,00";

    let userResult;

    let tempoUser = prompt("Insira o tempo de permanência no Estacionamento: ");
    
    
    
    if(tempoUser <= 30 || tempoUser < 60) {

        alert("O valor de pagamento R$ 1,00. Clique em 'ok' para realizar o pagamento");

        userResult = prompt("Digite o valor para pagamento: R$");
        

        valor1 = parseFloat(timeValue.replace(",", "."));
        valor2 = parseFloat(userResult.replace(",", "."));



        if(valor2 < valor1) {

            alert("Valor Insuficiente");
            return;
        
        }

        if(userResult > 1 ) {

            const calc = valor2 - valor1;

            alert(" O seu troco é R$ " + calc + " Reais");

        }


        alert("Obrigado!");

        return;
    
    }


    if(tempoUser >= 60 && tempoUser <= 119) {

        const timeValue2 = "1,75";
        alert("O valor de pagamento R$ 1,75. Clique em 'ok' para realizar o pagamento");


        userResult = prompt("Digite o valor para pagamento: R$");
        

        valor1 = parseFloat(timeValue2.replace(",", "."));
        valor2 = parseFloat(userResult.replace(",", "."));



        if(valor2 < valor1) {
            alert("Valor Insuficiente");
        }

        if(userResult > 1.75 ) {

            const calc = valor2 - valor1;

            alert(" O seu troco é R$ " + calc + " Reais");
        }

        alert("Obrigado!");

        return;
    }



    if(tempoUser >= 120 && tempoUser <= 120) {
        const timeValue3 = "3,00";
        alert("O valor de pagamento R$ 3,00. Clique em 'ok' para realizar o pagamento");


        userResult = prompt("Digite o valor para pagamento: R$");
        

        valor1 = parseFloat(timeValue3.replace(",", "."));
        valor2 = parseFloat(userResult.replace(",", "."));



        if(valor2 < valor1) {
            alert("Valor Insuficiente");
        }

        if(userResult > 3.00 ) {

            const calc = valor2 - valor1;

            alert(" O seu troco é R$ " + calc + " Reais");
        
        }


        alert("Obrigado!");

        return;

    }  
});