import validator from './validator.js';

let inputValue = document.getElementById("numIngresado"); 
let nombre = document.getElementById('nombre-usuario');


inputValue.addEventListener("keyup", function(){

  var maskifyString= validator.maskify(this.value)
  document.getElementById("showNumber").innerHTML = maskifyString;
  

});
nombre.addEventListener("keyup", function(){
  document.getElementById("name").innerHTML = this.value.toUpperCase();

});


let button = document.getElementById("botonValidation"); // Encuentra el elemento "button" en el sitio
button.onclick = validacion; // Agrega función onclick al elemento
  function validacion() {
    let mensajevalidacion=" "


        if(inputValue.value.length===16){
          if(validator.isValid(parseInt(inputValue.value))){
            document.getElementById("showNumber").innerHTML 
 
            mensajevalidacion="Numero de tarjeta valido"
            //alert("su pago ha sido exitoso")

          }else{
            mensajevalidacion="Numero de tarjeta Invalido"

            //alert("numero de tarjeta invalido")
          } 
          }else{
            mensajevalidacion="Ingrese un Numero valido"

            //alert("ingrese un numero valido")  
          }
  
          document.getElementById('mensaje').innerHTML = mensajevalidacion; 
  }

  //Ocultar pantalla dos
  document.getElementById("pantallados").style.display = "none";

const contenedorDeProductos=document.getElementById("contenedor-productos")

let arrayProductos=[
  {id:1,Nombre:"Maracuya",precio:"$"+12000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6v0aLeaO-eguELq3FziQF_aJF1_xl_YawA&usqp=CAU"},
  {id:2,Nombre:"Naranja",  precio:"$"+23000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiz8pP867uT8j4tqLdWZxSAhh9otz9YvD74Q&usqp=CAU"},
  {id:4,Nombre:"Kiwi", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A6Af7uuEzCmUYpLuc8eBKueG_vBjdiZvTw&usqp=CAU"},
  {id:5,Nombre:"Mandarina", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ4LVosuQanTYnNxMsi6hnZUBWJbGyzvGgQ&usqp=CAU"},
  {id:12,Nombre:"Sandia", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotjroMOF7xB9Y38DDn2a7IxB7iMkXB8hHjA&usqp=CAU"},
  {id:7,Nombre:"Manzana Verde", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVDhuerioKNGJW3lYQ5Tl5OtknXWNjTYorz2hmOitXleJoOMHEe6uMuB3UrIujqZd7ac&usqp=CAU"},
  {id:14,Nombre:"Uvas Roja", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY87s7NaBArzjSxnGHyDw8C0cbtaaMPWqZA&usqp=CAU"},
  {id:15,Nombre:"Fresas", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_caL_IY_wPjRT-yakrC1slTidJqyPN1Xy4Q&usqp=CAU"},
  {id:16,Nombre:"Cereza", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr02L1S-bnJ17fkKuHt_KF9MXCnehAZhkSA&usqp=CAU"},
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
    <h2 style="color:"red">${producto.Nombre}</h2>
    <p>${(producto.precio)}</p>
    <h4>${producto.stock}</h4>

    <p style="    background-color: #a7c395; width:50%; margin: auto; border-radius: 10px;">
    <a href="#" id="${producto.id}" style=" color:white;text-decoration: none;">Agregar al Carrito</a> 
    </p>
  `
  
  contenedorDeProductos.appendChild(div)

  let articleProducto = document.getElementById(producto.id);
  articleProducto.onclick = function (event) {
      event.preventDefault();
        
      agregarCarritoCompra(producto)
  }  
  
})

function agregarCarritoCompra(producto){
  //almacenamos los productos en el array del carrito
  if(carrito.length==0){
   carrito.push(producto)
   document.getElementById("numProducto").innerHTML=carrito.length;
   alert("Producto agragado correctamente");

  }else{
    var aux=0;
    carrito.map((index) => {
      if(index.id==producto.id){
        aux=1
      }
     })
     //si encontro el producto que ya estaba en el carrito
     if(aux==1){
      alert("Producto Ya esta agregado");
    }else{
      alert("Producto agragado correctamente");
      carrito.push(producto)
      document.getElementById("numProducto").innerHTML=carrito.length;

     }
  }
}




document.getElementById('validar').addEventListener('click',function(){

  if(carrito.length==0)
  alert("no tiene producto agregado al carrito")
  if(carrito.length>0)
  document.getElementById("pantallauno").style.display = "none";
  document.getElementById("pantallados").style.display = "block";


})


           





         




   
