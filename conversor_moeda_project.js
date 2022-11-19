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
