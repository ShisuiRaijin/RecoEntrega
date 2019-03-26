document.addEventListener("DOMContentLoaded", function(){

	//Para cargar el arreglo de tiendas cuales quiera. A efectos de muestra de tiendas en HOME

    var pedidoURL = "";  //La direccion de donde viene el pedido
    var pedido = new XMLHttpRequest();

    pedido.open('GET', pedidoURL);
    pedido.responseType = "json";
    pedido.send();

    var archivoTiendas; //Va a ser el arreglo de json - Caso en el que recibe 10 tiendas

    pedido.addEventListener("load", function(){




    }
}
