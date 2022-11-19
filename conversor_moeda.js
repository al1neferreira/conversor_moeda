function conversao(){
    var real = document.getElementById ('valor').value 
    if (real ==''|| real <= 0){
        document.getElementById('valorReal').innerHTML = "Digite um valor"
    }
 
    else{
 
    var dolar = parseFloat(real) *5.40
    var valorConvertido = dolar.toFixed(2)
    document.getElementById('valorReal').innerHTML = 'O valor convertido é de R$ ' + valorConvertido
    }

}

//Tentativas de validação do botão rádio (que não deram certo)

//function conversaoDolar(){
//var dolar = parseFloat(real) *5.40
//var valorConvertido = dolar.toFixed(2)
   
//if(document.getElementById(dolar).checked) {
// document.getElementById('valorReal').innerHTML = 'O valor convertido é de R$ ' + valorConvertido
//}
   

//function conversaoEuro(){ 
//var euro = parseFloat(real) *5.55
//var valorConvertidoEuro = euro.toFixed(2) 
//if (document.getElementById(euro).checked){
//document.getElementById('valorReal').innerHTML = 'O valor convertido é de R$ ' + valorConvertidoEuro 
//}


//function conversaoLibra(){ 
//var euro = parseFloat(real) *6.40
//var valorConvertidoEuro = euro.toFixed(2) 
//if (document.getElementById(libra).checked){
//document.getElementById('valorReal').innerHTML = 'O valor convertido é de R$ ' + valorConvertidoEuro 
//}






  




