document.addEventListener("DOMContentLoaded", function(){

    // ************************************************************FORMULARIO CREAR TIENDA


    //Obtengo las variables input que se van a ingresar

    var input_nombre = document.querySelector('#nombre');
    var input_contrasenia = document.querySelector('#inputContrasenia');
    var input_direccion = document.querySelector('#inputAddress');
    var input_email = document.querySelector('#inputemail');
    var input_cel = document.querySelector('#inputtelefono');
    var input_categoria = document.querySelector('#inputcategoria');
    var input_img = document.querySelector('#cargaimg'); 

    var btn_crear = document.querySelector("#btn_crear");

    var alerta_invalido = document.querySelector('#alerta_invalido');


//AGREGUE YO AHORA

    if (window.location.search === "?creo=1"){
        $('#exampleModal').modal('show')
    }

})