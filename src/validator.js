const validator = {
  isValid,
  maskify,

};

function isValid (creditCardNumber){
  var numIngresado =creditCardNumber;
      //declaramos un vector para guardar los digitos en reversa
      var digits = numIngresado.toString().split('');
      var  digitos =digits.map(Number)
        //console.log(digitos);
       
      let numReversa=[]
   let reversa= digitos.reverse();
       reversa.map((index) => {
        numReversa.push(index)
       })
       //console.log(numReversa)

       
         let suma=0
       for(let i=0; i<numReversa.length; i++){ 
          let numero=numReversa[i]

            if((i %2) !== 0){
             numero *= 2;

              if(numero > 9){
                numero -= 9
              }
            }
          suma += numero

       }
       if((suma % 10) ==0){
         return true
       }else{
        return false
       }
      
} 
//isValid(parametro)
//ocultar los numeros 
function maskify(card){

  var enmascarar = card;
  var numerofinal = '';
  for (var i = 0; i < enmascarar.length; i++) {
    if (i < enmascarar.length - 4) {
      numerofinal = numerofinal + '#';
    } else {
      numerofinal = numerofinal + (enmascarar[i]); 
    }     
  }
  return numerofinal;
}


export default validator;
