const validator = {
 
    animacion(title,icono){
        Swal.fire({
          position: 'center',
          icon: icono,
          title: title,
          showConfirmButton: false,
          timer: 1500
        })
        document.getElementById("showNumber").innerHTML=  "";      

      },

      mostrarNumCardDom(num){
          document.getElementById("showNumber").innerHTML=num
      },


      numeroCardValida(id, mensaje){
        document.getElementById(id).innerHTML=mensaje;

      },

      ocultarPantallados(){
        document.getElementById("pantallados").style.display = "none";
      },

      contadorCarrito(productoCarrito){
        document.getElementById("numProducto").innerHTML=productoCarrito;   

      }



};




export default validator;
