document.addEventListener("DOMContentLoaded", function(){

	//Para cargar la pagina de vista_tienda del publico


    //******************************INFO DE LA PAGINA*************************************
    var pedidoURL = 'https://raw.githubusercontent.com/Camila-Choca/Json_de_prueba/master/tienda_x.json';  //La direccion de donde viene el pedido
    var pedido = new XMLHttpRequest();
    pedido.open('GET', pedidoURL);
    pedido.responseType = "json";
    pedido.send();
    var info_tienda; //va a ser el arreglo de json
    //Json de una sola tienda ------> archivoLista[0] siempre.


    //*****************************INFO PRODUCTOS DE ESTA TIENDA***************************
    var pedido2URL = 'https://raw.githubusercontent.com/Camila-Choca/Json_de_prueba/master/productos.json';  //La direccion de donde viene el pedido
    var pedido2 = new XMLHttpRequest();
    pedido2.open('GET', pedido2URL);
    pedido2.responseType = "json";
    pedido2.send();
    var info_productos; //va a ser el arreglo de json


    //******************************** USO LOS ARREGLOS DEL JSON *************************** 

    //Respecto a la tienda
    pedido.addEventListener("load", function(){
        //Coloco los datos en el html
        info_tienda = pedido.response; //es un arreglo formado por los productos 

        //Coloca nombre
        var colocar_nombre = document.querySelector('#nomb_tienda');
        colocar_nombre.textContent = info_tienda[0].nombre_tienda;

        //Colocar dir
        var colocar_direccion = document.querySelector('#carga_direccion');
        colocar_direccion.textContent = info_tienda[0].direccion_tienda;

        //Colocar cat
        var colocar_categoria = document.querySelector('#carga_categoria');
        colocar_categoria.textContent = info_tienda[0].categoria;

        //Colocar cel
        var colocar_celular =document.querySelector('#carga_celular');
        colocar_celular.textContent = info_tienda[0].contacto;

        //Colocar correo
        var colocar_correo = document.querySelector('#carga_correo');
        colocar_correo.textContent = info_tienda[0].correo_electronico;

        //Colocar img
        var colocar_imagen = document.querySelector('#carga_img');
        colocar_imagen.setAttribute("src",info_tienda[0].imagen_portada_tienda);
        
    });


    //Respecto a los productos
    pedido2.addEventListener("load", function(){

    	info_productos = pedido2.response; //es un arreglo formado por los productos de la tienda
        var cantidad_productos = info_productos.length;

        var contenedor_tienda = document.querySelector('#contenedor_tienda_x');

        //Creo la lista general
        var lista_productos = document.createElement("ul");
        lista_productos.setAttribute("class", "list-unstyled");
        contenedor_tienda.appendChild(lista_productos);

        //Iterando sobre la cantidad de productos

        for (var i = 0; i <= cantidad_productos; i++) {
            
            //Creo un ítems, para UN producto
            var item_producto = document.createElement('li');
            item_producto.setAttribute("class", "media");
            item_producto.setAttribute("class", "ml-5");
            //Agrego a la lista
            lista_productos.appendChild(item_producto);

            var contenedor_imagen_producto = document.createElement('img');
            contenedor_imagen_producto.setAttribute("class", "mr-3");
            contenedor_imagen_producto.setAttribute("class", "max-width: 150px");
            //obtengo la imagen - direccion
            var imagen_del_producto = info_productos[i].imagen_producto;
            contenedor_imagen_producto.setAttribute("src", imagen_del_producto);
            //Agrego a la lista
            item_producto.appendChild(contenedor_imagen_producto);

            var div_datos = document.createElement('div');
            div_datos.setAttribute("class", "media-body");
            //Agrego a la lista
            item_producto.appendChild(div_datos);

            var producto_nombre = document.createElement('h6');
            producto_nombre.setAttribute("class", "mt-0");
            producto_nombre.setAttribute("class", "mb-1");
            producto_nombre.textContent = "Producto: " + info_productos[i].nombre_producto;
            //Agrego a la lista
            div_datos.appendChild(producto_nombre);

            var producto_precio = document.createElement('p');
            producto_precio.textContent = "Precio del producto: $" +info_productos[i].precio_producto;
            //Agrego a la lista
            div_datos.appendChild(producto_precio);

            contenedor_tienda .appendChild(item_producto);

        };
 
    });



// <ul class="list-unstyled" >
//       <li class="media">
//             <img src="..." class="mr-3" alt="...">
//             <div class="media-body">
//               <h5 class="mt-0 mb-1">List-based media object</h5>
//               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//             </div>

//       </li>

//       <li class="media my-4">
//         <img src="..." class="mr-3" alt="...">
//         <div class="media-body">
//           <h5 class="mt-0 mb-1">List-based media object</h5>
//           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//         </div>
//       </li>

//       <li class="media">
//         <img src="..." class="mr-3" alt="...">
//         <div class="media-body">
//           <h5 class="mt-0 mb-1">List-based media object</h5>
//           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//         </div>
//       </li>
// </ul>

});
