import validator from './validator.js';


let num = document.getElementById('numIngresado'); 
let numIngresadoGlobal;
num.addEventListener("keyup", function(){
  
      document.getElementById("showNumber").innerHTML=this.value
      numIngresadoGlobal=this.value
});



var boton = document.getElementById("botonValidation");
boton.onclick = function() {

      if(validator.validateNum(numIngresadoGlobal)){
             algoritmoSadys()
      }else{
            alert("tiene un error")
      }
}


function algoritmoSadys(){
     alert("excelente")
}
   


   
