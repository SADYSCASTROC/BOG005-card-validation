import validator from './validator.js';


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
           


























         // Array de objetos para guardar los productos
const contenedorDeProductos=document.getElementById("contenedor-productos")

let arrayProductos=[
  {id:1,Nombre:"Maracuya",precio:"$"+12000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6v0aLeaO-eguELq3FziQF_aJF1_xl_YawA&usqp=CAU"},
  {id:2,Nombre:"Naranja",  precio:"$"+23000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiz8pP867uT8j4tqLdWZxSAhh9otz9YvD74Q&usqp=CAU"},
  {id:4,Nombre:"Kiwi", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A6Af7uuEzCmUYpLuc8eBKueG_vBjdiZvTw&usqp=CAU"},
  {id:5,Nombre:"Mandarina", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ4LVosuQanTYnNxMsi6hnZUBWJbGyzvGgQ&usqp=CAU"},
  {id:6,Nombre:"Limon", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCkITpyi6lRIRHQkywklp6Nbj-dtIefpwmA&usqp=CAU"},
  {id:7,Nombre:"Manzana Verde", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVDhuerioKNGJW3lYQ5Tl5OtknXWNjTYorz2hmOitXleJoOMHEe6uMuB3UrIujqZd7ac&usqp=CAU"},
  {id:8,Nombre:"Pomelo", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMekNZrVqLzw-POqGIg7jWu_TYt4BTecjSw&usqp=CAU"},
  {id:9,Nombre:"Mango", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0LSeAMhoiWRDcuqzpMAIojyfixhsjiX0jg&usqp=CAU"},
  {id:10,Nombre:"Ciruela", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69FhSXEE2pbTrLxxQVnqUaJXiiRajK0yrzw&usqp=CAU"},
  {id:11,Nombre:"Uvas Verdes", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYKbulP_OqWh5aO-QsvG1TeRx9zU8WlAF9w&usqp=CAU"},
  {id:12,Nombre:"Sandia", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotjroMOF7xB9Y38DDn2a7IxB7iMkXB8hHjA&usqp=CAU"},
  {id:13,Nombre:"Manzana", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKllhEYE_0gHUmzlLaDtPsFpjM9A642BOWSg&usqp=CAU"},
  {id:14,Nombre:"Uvas Roja", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY87s7NaBArzjSxnGHyDw8C0cbtaaMPWqZA&usqp=CAU"},
  {id:15,Nombre:"Fresas", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_caL_IY_wPjRT-yakrC1slTidJqyPN1Xy4Q&usqp=CAU"},
  {id:16,Nombre:"Cereza", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr02L1S-bnJ17fkKuHt_KF9MXCnehAZhkSA&usqp=CAU"},


]


let carrito=[];

// ForEach para recorrer el array de productos
// creamos un div para mostrar los objetos en el html
arrayProductos.forEach((producto) =>{

  const div=document.createElement("div")
  div.classList.add("produto")
  div.innerHTML=`
    
    
    <img src=${producto.img} alt=">
    <h2 style="color:red">${producto.Nombre}</h2>
    <p>${(producto.precio)}</p>
    <h4>${producto.stock}</h4>

    <p style="">
    <a href="#" id="${producto.id}">Agregar al Carrito</a> 
    </p>
  `
  
  contenedorDeProductos.appendChild(div)

  let articleProducto = document.getElementById(producto.id);
  articleProducto.onclick = function (event) {
      event.preventDefault();
        
      agregarCarritoCompra(producto)
  }  
  
})
document.getElementById("pantallados").style.display = "none";




function agregarCarritoCompra(producto){
  
  //almacenamos los productos en el array del carrito
  if(carrito.length==0){
   carrito.push(producto)
   document.getElementById("numProducto").innerHTML=carrito.length;
   alert("Producto Agregado correctamente")
   mostrarDetalle()

  }else{
    var aux=0;
    carrito.map((index) => {
      if(index.id==producto.id){
        aux=1
      }
     })

     //si encontro el producto que ya estaba en el carrito
     if(aux==1){
        alert("El producto ya estaba agregado")
     }else{
      alert("Producto Agregado correctamente")

      carrito.push(producto)
      document.getElementById("numProducto").innerHTML=carrito.length;   
      mostrarDetalle()
     }
  }
}



function mostrarDetalle(){

//   carrito.forEach((carr) =>{
//     const div=document.createElement("div")
//     div.classList.add("produto")
//     div.innerHTML=`
      
      
//       <img src=${carr.img} alt=">
//       <h2 style="color:red">${carr.Nombre}</h2>
//       <p>${carr.precio}</p>
//       <h4>${carr.stock}</h4>
  
//       <p style="">
//       <a href="#" id="${carr.id}">Agregar al Carrito</a>       </p>
//     `
  
//     contenedorDetalleCarrito.appendChild(div)
  
// })

}


document.getElementById('validar').addEventListener('click',function(){
  document.getElementById("pantallauno").style.display = "none";
  document.getElementById("pantallados").style.display = "block";
  

})
         

      

   


   
