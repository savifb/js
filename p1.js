function calcularIMC(){
    //entrada de dados 
    //entrada de dados
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;


    //processamento 

    let imc = peso / (altura * altura); 
    //saida 
    document.getElementById('resultado').textContent = 'o valor do seu IMC é: ' + imc.toFixed(2);
    
 }



//saida 