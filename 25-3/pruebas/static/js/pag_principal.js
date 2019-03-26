document.addEventListener("DOMContentLoaded", function(){

	//Para cargar el arreglo de tiendas cuales quiera. A efectos de muestra de tiendas en HOME

    var pedidoURL = "http://localhost:8000/unt";  //La direccion de donde viene el pedido -----> FALTA
    var pedido = new XMLHttpRequest();

    pedido.open('GET', pedidoURL);
    pedido.responseType = "json";
    pedido.send();

    var archivoTiendas; //Va a ser el arreglo de json - Caso en el que recibe 12 tiendas

    pedido.addEventListener("load", function(){

    	archivoTiendas = pedido.response;

    	//tienda 0 - cuadricula
    	var img_tienda0 = document.querySelector('#img_tienda0');
    	img_tienda0.setAttribute("src", archivoTiendas[0].imagen_portada_tienda);
    	var nombre_tienda0 = document.querySelector('#nombre_t0');
    	nombre_tienda0.textContent = archivoTiendas[0].nombre_tienda;
    	var direccion_tienda0 = document.querySelector('#direccion_t0');
    	direccion_tienda0.textContent = archivoTiendas[0].direccion_tienda;
    	var categoria_tienda0 = document.querySelector('#categoria_t0');
			categoria_tienda0.textContent = archivoTiendas[0].categoria_tienda;
			var href_tienda0 = document.querySelector('#href0');
			var direccion0=(/publico/+archivoTiendas[0].id_tienda);
			href_tienda0.setAttribute ("href", direccion0);

    	//tienda 1  - cuadricula
    	var img_tienda1 = document.querySelector('#img_tienda1');
    	img_tienda1.setAttribute("src", archivoTiendas[1].imagen_portada_tienda);
    	var nombre_tienda1 = document.querySelector('#nombre_t1');
    	nombre_tienda1.textContent = archivoTiendas[1].nombre_tienda;
    	var direccion_tienda1 = document.querySelector('#direccion_t1');
    	direccion_tienda1.textContent = archivoTiendas[1].direccion_tienda;
    	var categoria_tienda1 = document.querySelector('#categoria_t1');
			categoria_tienda1.textContent = archivoTiendas[1].categoria_tienda;
			var href_tienda1 = document.querySelector('#href1');
			var direccion1=(/publico/+archivoTiendas[1].id_tienda);
			href_tienda1.setAttribute ("href",direccion1);

    	//tienda 2 - cuadricula
    	var img_tienda2 = document.querySelector('#img_tienda2');
    	img_tienda2.setAttribute("src", archivoTiendas[2].imagen_portada_tienda);
    	var nombre_tienda2 = document.querySelector('#nombre_t2');
    	nombre_tienda2.textContent = archivoTiendas[2].nombre_tienda;
    	var direccion_tienda2 = document.querySelector('#direccion_t2');
    	direccion_tienda2.textContent = archivoTiendas[2].direccion_tienda;
    	var categoria_tienda2 = document.querySelector('#categoria_t2');
			categoria_tienda2.textContent = archivoTiendas[2].categoria_tienda;
			var href_tienda2 = document.querySelector('#href2');
			var direccion2=(/publico/+archivoTiendas[2].id_tienda);
			href_tienda2.setAttribute ("href",direccion2);
  
    	//tienda 3 - cuadricula
    	var img_tienda3 = document.querySelector('#img_tienda3');
    	img_tienda3.setAttribute("src", archivoTiendas[3].imagen_portada_tienda);
    	var nombre_tienda3 = document.querySelector('#nombre_t3');
    	nombre_tienda3.textContent = archivoTiendas[3].nombre_tienda;
    	var direccion_tienda3 = document.querySelector('#direccion_t3');
    	direccion_tienda3.textContent = archivoTiendas[3].direccion_tienda;
    	var categoria_tienda3 = document.querySelector('#categoria_t3');
			categoria_tienda3.textContent = archivoTiendas[3].categoria_tienda;
			var href_tienda3 = document.querySelector('#href3');
			var direccion3=(/publico/+archivoTiendas[3].id_tienda);
			href_tienda3.setAttribute ("href",direccion3);  	

    	//tienda 4 - cuadricula
    	var img_tienda4 = document.querySelector('#img_tienda4');
    	img_tienda4.setAttribute("src", archivoTiendas[4].imagen_portada_tienda);
    	var nombre_tienda4 = document.querySelector('#nombre_t4');
    	nombre_tienda4.textContent = archivoTiendas[4].nombre_tienda;
    	var direccion_tienda4 = document.querySelector('#direccion_t4');
    	direccion_tienda4.textContent = archivoTiendas[4].direccion_tienda;
    	var categoria_tienda4 = document.querySelector('#categoria_t4');
			categoria_tienda4.textContent = archivoTiendas[4].categoria_tienda;
			var href_tienda4 = document.querySelector('#href4');
			var direccion4=(/publico/+archivoTiendas[4].id_tienda);
			href_tienda4.setAttribute ("href",direccion4);

    	//tienda 5 - cuadricula
    	var img_tienda5 = document.querySelector('#img_tienda5');
    	img_tienda5.setAttribute("src", archivoTiendas[5].imagen_portada_tienda);
    	var nombre_tienda5 = document.querySelector('#nombre_t5');
    	nombre_tienda5.textContent = archivoTiendas[5].nombre_tienda;
    	var direccion_tienda5 = document.querySelector('#direccion_t5');
    	direccion_tienda5.textContent = archivoTiendas[5].direccion_tienda;
    	var categoria_tienda5 = document.querySelector('#categoria_t5');
			categoria_tienda5.textContent = archivoTiendas[5].categoria_tienda;
			var href_tienda5 = document.querySelector('#href5');
			var direccion5=(/publico/+archivoTiendas[5].id_tienda);
			href_tienda5.setAttribute ("href",direccion5);

    	//tienda 6 - cuadricula
    	var img_tienda6 = document.querySelector('#img_tienda6');
    	img_tienda6.setAttribute("src", archivoTiendas[6].imagen_portada_tienda);
    	var nombre_tienda6 = document.querySelector('#nombre_t6');
    	nombre_tienda6.textContent = archivoTiendas[6].nombre_tienda;
    	var direccion_tienda6 = document.querySelector('#direccion_t6');
    	direccion_tienda6.textContent = archivoTiendas[6].direccion_tienda;
    	var categoria_tienda6 = document.querySelector('#categoria_t6');
			categoria_tienda6.textContent = archivoTiendas[6].categoria_tienda;
			var href_tienda6 = document.querySelector('#href6');
			var direccion6=(/publico/+archivoTiendas[6].id_tienda);
			href_tienda6.setAttribute ("href",direccion6);

    	//tienda 7 - cuadricula
    	var img_tienda7 = document.querySelector('#img_tienda7');
    	img_tienda7.setAttribute("src", archivoTiendas[7].imagen_portada_tienda);
    	var nombre_tienda7 = document.querySelector('#nombre_t7');
    	nombre_tienda7.textContent = archivoTiendas[7].nombre_tienda;
    	var direccion_tienda7 = document.querySelector('#direccion_t7');
    	direccion_tienda7.textContent = archivoTiendas[7].direccion_tienda;
    	var categoria_tienda7 = document.querySelector('#categoria_t7');
			categoria_tienda7.textContent = archivoTiendas[7].categoria_tienda;
			var href_tienda7 = document.querySelector('#href7');
			var direccion7=(/publico/+archivoTiendas[7].id_tienda);
			href_tienda7.setAttribute ("href",direccion7);

    	//tienda 8 - cuadricula
    	var img_tienda8 = document.querySelector('#img_tienda8');
    	img_tienda8.setAttribute("src", archivoTiendas[8].imagen_portada_tienda);
    	var nombre_tienda8 = document.querySelector('#nombre_t8');
    	nombre_tienda8.textContent = archivoTiendas[8].nombre_tienda;
    	var direccion_tienda8 = document.querySelector('#direccion_t8');
    	direccion_tienda8.textContent = archivoTiendas[8].direccion_tienda;
    	var categoria_tienda8 = document.querySelector('#categoria_t8');
			categoria_tienda8.textContent = archivoTiendas[8].categoria_tienda;
			var href_tienda8 = document.querySelector('#href8');
			var direccion8=(/publico/+archivoTiendas[8].id_tienda);
			href_tienda8.setAttribute ("href",direccion8);


		//Tres tiendas cuyas imagenes van al carrousell
		
		//tienda 1 - carrousell
		var tienda1_carrousell = document.querySelector('#img1_carrousel');
		tienda1_carrousell.setAttribute("src", archivoTiendas[9].imagen_portada_tienda);
		var href_tienda9 = document.querySelector('#href_carrousel_uno');
		var direccion9=(/publico/+archivoTiendas[9].id_tienda);
		href_tienda9.setAttribute ("href",direccion9);

		//tienda 2 - carrousell
		var tienda2_carrousell = document.querySelector('#img2_carrousel');
		tienda2_carrousell.setAttribute("src", archivoTiendas[10].imagen_portada_tienda);
		var href_tienda10 = document.querySelector('#href_carrousel_dos');
		var direccion10=(/publico/+archivoTiendas[10].id_tienda);
		href_tienda10.setAttribute ("href",direccion10);
		

		//tienda 3 - carrousell
		var tienda3_carrousell = document.querySelector('#img3_carrousel');
		tienda3_carrousell.setAttribute("src", archivoTiendas[11].imagen_portada_tienda);
		var href_tienda11 = document.querySelector('#href_carrousel_tres');
		var direccion11=(/publico/+archivoTiendas[11].id_tienda);
		href_tienda11.setAttribute ("href",direccion11);
    }
,)})
