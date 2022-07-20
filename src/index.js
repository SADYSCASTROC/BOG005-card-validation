import validator from './validator.js';
//carrito de compras
let agregarproducto=[]

let botonAgregarproductos = document.getElementById("botonAgregarProducto");
botonAgregarproductos.onclick = function() {

  


}











//validaion del numero de tarjeta de credito

let num = document.getElementById('numIngresado'); 
let nombre = document.getElementById('nombre-usuario'); 
let numIngresadoGlobal;
let nameGlobal;



num.addEventListener("keyup", function(){

      
  numIngresadoGlobal= document.getElementById("showNumber").innerHTML=this.value;
});
nombre.addEventListener("keyup", function(){
      nameGlobal= document.getElementById("name").innerHTML=this.value.toUpperCase();
});



let boton = document.getElementById("botonValidation");
boton.onclick = function() {

     // if(validator.validateNum(numIngresadoGlobal)){
            numeroDigitosSeparados()
     // }else{
     //       alert("tiene un error")
     // }

}

function numeroDigitosSeparados(){
     //alert("excelente")

let digits
let digitos
      digits = numIngresadoGlobal.toString().split('');
      digitos = digits.map(Number)
           console.log(digitos);

           validacion(digitos)
}

function validacion(numeroTarjeta){


let obtenerNumeroReversa=[]
            let reversa= numeroTarjeta.reverse();
         
            console.log(reversa)
               reversa.map((index) => {
                 obtenerNumeroReversa.push(index)
                })
                console.log(obtenerNumeroReversa)
         
                
                  let suma=0
                for(let i=0; i<obtenerNumeroReversa.length; i++){ 
                   let numero=obtenerNumeroReversa[i]
         
                     if((i %2) !== 0){
                      numero *= 2;
         
                       if(numero > 9){
                         numero -= 9
                       }
                     }
                   suma += numero
         
                }
                if((suma % 10) ==0){

                  document.getElementById("responseValidate").innerHTML="Numero de tarjeta valido";
                }else{

                   document.getElementById("responseValidate").innerHTML="Numero de tarjeta no valido";

                }
         }
           
         

      

   


   
