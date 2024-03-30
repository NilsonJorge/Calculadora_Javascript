var result = document.getElementById('texto');
var text = "";
var c1 = "";
var c2 = "";
var operador = null;
var pointc1 = false;
var pointc2 = false;

var botoes = document.querySelectorAll('button');// coleta todos os tipos botoes


// Itera sobre cada botão e adiciona um evento de clique
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        
        var valorDoBotao = botao.value;
        if(valorDoBotao == "ac"){
            text = "";
            c1 = "";
            c2 = "";
            operador = null;
            pointc1 = false;
            pointc2 = false;

        } else if(valorDoBotao == "="){
            result.textContent = text;
            let number1 = parseFloat(c1);
            let number2 = parseFloat(c2);
            console.log(number1)
            console.log(number2)
            if (operador === "+"){
                text = number1 + number2;
            }
            if (operador === "*"){
                text = number1 * number2;
            }
            if (operador === "-"){
                text = number1 - number2;
            }
            if (operador === "/"){
                text = number1 / number2;
            }
            operador = null
            c1 = text;
            c2 = "";
            
        
        }else{
            if(valorDoBotao == "/" || valorDoBotao == "*" || valorDoBotao == "-" || valorDoBotao == "+" ){
                if(operador == null){
                    operador = valorDoBotao;
                }
                text = text + valorDoBotao;
            }else{
                if(operador == null){
                    if(valorDoBotao == "." && pointc1 == false){
                        pointc1 = true
                        c1 = c1 + valorDoBotao;
                    }else if (valorDoBotao != "."){
                        c1 = c1 + valorDoBotao;
                    }else{
                        valorDoBotao = "";
                    }
                }else{
                    if(valorDoBotao == "." && pointc2 == false){
                        pointc2 = true
                        c2 = c2 + valorDoBotao;
                    }else if(valorDoBotao != "."){
                        c2 = c2 + valorDoBotao;
                    }else{
                        valorDoBotao = "";
                    }
                }    
                text = text + valorDoBotao;
            }
        }
        result.textContent = text;
        // Exibe o valor no console
        console.log('Valor do botão clicado:', valorDoBotao);
    });
});
