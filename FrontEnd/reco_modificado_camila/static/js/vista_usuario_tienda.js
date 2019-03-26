document.addEventListener("DOMContentLoaded", function(){

	//Para cargar la pagina de vista_tienda

    var pedidoURL = '';  //La direccion de donde viene el pedido
    var pedido = new XMLHttpRequest();

    pedido.open('GET', pedidoURL);
    pedido.responseType = "json";
    pedido.send();

    var archivoLista; //va a ser el arreglo del json - Json de una sola tienda ----> archivoLista[0] siempre.

    pedido.addEventListener("load", function(){

    	archivoLista = pedido.response; //es un arreglo formado por los datos del json

    	//Coloco nombre
        var nombre_tienda = document.querySelector('#div_nombre h5'); 
        nombre_tienda.textContent = archivoLista[0].nombre_tienda;

    	//Coloco imagen
        var imagen_tienda = document.querySelector('#div_imagen_tienda img');
        imagen_tienda.setAttribute("src", archivoLista[0].imagen_portada_tienda);
        imagen_tienda.setAttribute("title", "Imagen de fachada de "+ archivoLista.nombre_tienda);

    	//Coloco dirección
    	var direccion_tienda = document.querySelector('ul li #dir_tienda');
    	direccion_tienda.textContent = archivoLista[0].direccion_tienda;

    	//Coloco categoría
    	var categ_tienda = document.querySelector('ul li #cat_tienda');
    	categ_tienda.textContent = archivoLista[0].categoria;

    	//Coloco contacto
    	var contacto_tienda = document.querySelector('ul li #celu_tienda');
    	contacto_tienda.textContent = archivoLista[0].contacto;

    	//Coloco correo electronico
    	var correo_electronico_tienda = document.querySelector('ul li #correo_tienda');
    	correo_electronico_tienda.textContent = archivoLista[0];

    });
});