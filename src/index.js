import validator from './validator.js';

let inputValue = document.getElementById("numIngresado"); 
let nombre = document.getElementById('nombre-usuario'); 


inputValue.addEventListener("keyup", function(){

  var maskifyString= validator.maskify(this.value)
  document.getElementById("showNumber").innerHTML = maskifyString;


});

let button = document.getElementById("botonValidation"); // Encuentra el elemento "button" en el sitio
button.onclick = validacion; // Agrega función onclick al elemento
  function validacion() {
  
    if(validator.isValid(parseInt(inputValue.value))){
      animacion("su pago ha sido exitoso", "success")

    }else{
      animacion("numero de tarjeta invalido", "error")
    }
  }




  function animacion(title,icono){
    Swal.fire({
      title: 'Sus datos se estan validando',
      text: "cargando...",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          title,
          '',
          icono
        )
      }else{
        Swal.fire(
          "Error",
          'Por favor debe aceptar para validar sus datos',
          'error'
        )
      }
    })
  }


  //Ocultar pantalla dos
  document.getElementById("pantallados").style.display = "none";

const contenedorDeProductos=document.getElementById("contenedor-productos")

let arrayProductos=[
  {id:1,Nombre:"Maracuya",precio:"$"+12000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6v0aLeaO-eguELq3FziQF_aJF1_xl_YawA&usqp=CAU"},
  {id:2,Nombre:"Naranja",  precio:"$"+23000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiz8pP867uT8j4tqLdWZxSAhh9otz9YvD74Q&usqp=CAU"},
  {id:4,Nombre:"Kiwi", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A6Af7uuEzCmUYpLuc8eBKueG_vBjdiZvTw&usqp=CAU"},
  {id:5,Nombre:"Mandarina", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ4LVosuQanTYnNxMsi6hnZUBWJbGyzvGgQ&usqp=CAU"},
  {id:6,Nombre:"Limon", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCkITpyi6lRIRHQkywklp6Nbj-dtIefpwmA&usqp=CAU"},
  {id:7,Nombre:"Manzana Verde", precio:"$"+9000,stock:"Stock:"+" "+2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVDhuerioKNGJW3lYQ5Tl5OtknXWNjTYorz2hmOitXleJoOMHEe6uMuB3UrIujqZd7ac&usqp=CAU"},
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

function agregarCarritoCompra(producto){
  //almacenamos los productos en el array del carrito
  if(carrito.length==0){
   carrito.push(producto)
   document.getElementById("numProducto").innerHTML=carrito.length;
   mostrarDetalle();
   animacioCarrito("Producto agragado correctamente","success");

  }else{
    var aux=0;
    carrito.map((index) => {
      if(index.id==producto.id){
        aux=1
      }
     })
     //si encontro el producto que ya estaba en el carrito
     if(aux==1){
      animacioCarrito("Producto Ya esta agregado","warning");
    }else{
      animacioCarrito("Producto agragado correctamente","success");
      carrito.push(producto)
      document.getElementById("numProducto").innerHTML=carrito.length;

      mostrarDetalle()
     }
  }
}


function mostrarDetalle(){}


document.getElementById('validar').addEventListener('click',function(){
  document.getElementById("pantallauno").style.display = "none";
  document.getElementById("pantallados").style.display = "block";


})

function animacioCarrito(titulo,icono){
  Swal.fire({
    position: 'top-end',
    icon: icono,
    title: titulo,
    showConfirmButton: false,
    timer: 1500
  })
}
           





         




   
