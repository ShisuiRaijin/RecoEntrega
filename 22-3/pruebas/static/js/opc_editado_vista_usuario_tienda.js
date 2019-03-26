document.addEventListener("DOMContentLoaded", function(){
    //Coloco inputs dinamicamente para editar los campos

    //Obtengo todos los botones EDITAR
    boton_editar_nombre = document.querySelector('#editar_nombre');
    boton_editar_dir = document.querySelector('#editar_dir');
    boton_editar_categoria = document.querySelector('#editar_cat');
    boton_editar_contacto = document.querySelector('#editar_contacto');
    boton_editar_correo = document.querySelector('#editar_correo');


    //Al clickear el boton EDITAR - campo nombre
    boton_editar_nombre.addEventListener("click", function(){

    	var form_nombre = document.createElement("form");
    	form_nombre.setAttribute("method", "post");

    	var label_editar_nombre = document.createElement("label"); 
    	label_editar_nombre.setAttribute("for", "nombre_nueva");
        label_editar_nombre.setAttribute("class", "mr-5"); 
        label_editar_nombre.textContent = "Ingrese nuevo nombre ";

        form_nombre.appendChild(label_editar_nombre); //Agrego al formulario

        var input_editar_nombre = document.createElement("input");
        input_editar_nombre.setAttribute("type", "text");
        input_editar_nombre.setAttribute("id", "nombre_nueva");
        input_editar_nombre.setAttribute("name", "nombre_nueva");
        input_editar_nombre.required ="true";

        form_nombre.appendChild(input_editar_nombre); //Agrego al formulario

        var boton_nombre_listo = document.createElement("button");
        boton_nombre_listo.setAttribute("type", "submit");
        boton_nombre_listo.setAttribute("class", "btn");
        boton_nombre_listo.setAttribute("class", "btn-secondary");
        boton_nombre_listo.setAttribute("class", "btn-sm");
        boton_nombre_listo.textContent ="Listo";

        form_nombre.appendChild(boton_nombre_listo); //Agrego al formulario

        var items_nombre = document.querySelector('#div_nombre');
        items_nombre.appendChild(form_nombre); //Agrego formulario de editar direccion al 'li' del html
    });



    //Al clickear el boton EDITAR - campo direccion
    boton_editar_dir.addEventListener("click", function(){

    	boton_editar_dir.disabled=true;

    	var form_dir = document.createElement("form");
    	form_dir.setAttribute("method", "post");

    	var label_editar_direccion = document.createElement("label"); 
    	label_editar_direccion.setAttribute("for", "direccion_nueva");
        label_editar_direccion.setAttribute("class", "mr-5"); 
        label_editar_direccion.setAttribute("class", "pr-4");
        label_editar_direccion.textContent = "Ingrese nueva dirección ";

        form_dir.appendChild(label_editar_direccion); //Agrego al formulario

        var input_editar_direccion = document.createElement("input");
        input_editar_direccion.setAttribute("type", "text");
        input_editar_direccion.setAttribute("id", "direccion_nueva");
        input_editar_direccion.setAttribute("name", "direccion_nueva");
        input_editar_direccion.setAttribute("class", "pl-3");


        form_dir.appendChild(input_editar_direccion); //Agrego al formulario

        var boton_direccion_listo = document.createElement("button");
        boton_direccion_listo.setAttribute("type", "submit");
        boton_direccion_listo.setAttribute("class", "btn");
        boton_direccion_listo.setAttribute("class", "btn-secondary");
        boton_direccion_listo.setAttribute("class", "btn-sm");
        boton_direccion_listo.textContent ="Listo";

        form_dir.appendChild(boton_direccion_listo); //Agrego al formulario


        //Boton cancelar edicion
        var boton_direccion_cancelar = document.createElement("button");
        boton_direccion_cancelar.setAttribute("type", "button");
        boton_direccion_cancelar.setAttribute("class", "btn");
        boton_direccion_cancelar.setAttribute("class", "btn-secondary");
        boton_direccion_cancelar.setAttribute("class", "btn-sm");
        boton_direccion_cancelar.textContent = "Cancelar";

        form_dir.appendChild(boton_direccion_cancelar); //Agrego al formulario


        boton_direccion_cancelar.addEventListener("click", function(){
        	boton_editar_dir.disabled=false;
        	form_dir.reset();
        	items_direccion.removeChild(form_dir);
        });

        //Agrego al DOM
        var items_direccion = document.querySelector('#li_direccion');
        items_direccion.appendChild(form_dir); //Agrego formulario de editar direccion al 'li' del html
    });



     //Al clickear el boton EDITAR - campo categoria
    boton_editar_categoria.addEventListener("click", function(){

    	boton_editar_categoria.disabled=true;

    	var form_categ = document.createElement("form");
    	form_categ.setAttribute("method", "post");

    	var label_editar_categoria = document.createElement("label"); 
    	label_editar_categoria.setAttribute("for", "categoria_nueva");
        label_editar_categoria.setAttribute("class", "mr-5"); 
        label_editar_categoria.textContent = "Ingrese nueva categoría ";
        label_editar_categoria.setAttribute("class", "pr-4");

        form_categ.appendChild(label_editar_categoria); //Agrego al formulario

        var input_editar_categoria = document.createElement("input");
        input_editar_categoria.setAttribute("type", "text");
        input_editar_categoria.setAttribute("id", "categoria_nueva");
        input_editar_categoria.setAttribute("name", "categoria_nueva");


        form_categ.appendChild(input_editar_categoria); //Agrego al formulario

        var boton_categoria_listo = document.createElement("button");
        boton_categoria_listo.setAttribute("type", "submit");
        boton_categoria_listo.setAttribute("class", "btn");
        boton_categoria_listo.setAttribute("class", "btn-secondary");
        boton_categoria_listo.setAttribute("class", "btn-sm");
        boton_categoria_listo.textContent ="Listo";

        form_categ.appendChild(boton_categoria_listo); //Agrego al formulario

        //Boton cancelar edicion
        var boton_categoria_cancelar = document.createElement("button");
        boton_categoria_cancelar.setAttribute("type", "button");
        boton_categoria_cancelar.setAttribute("class", "btn");
        boton_categoria_cancelar.setAttribute("class", "btn-secondary");
        boton_categoria_cancelar.setAttribute("class", "btn-sm");
        boton_categoria_cancelar.textContent = "Cancelar";

        form_categ.appendChild(boton_categoria_cancelar); //Agrego al formulario


        boton_categoria_cancelar.addEventListener("click", function(){
        	boton_editar_categoria.disabled=false;
        	form_categ.reset();
        	items_categoria.removeChild(form_categ);
        });


        //Agrego al DOM
        var items_categoria = document.querySelector('#li_categoria');
        items_categoria.appendChild(form_categ); //Agrego formulario de editar categoria al 'li' del html
    });



    //Al clickear el boton EDITAR - campo contacto
    boton_editar_contacto.addEventListener("click", function(){

    	boton_editar_contacto.disabled=true;

    	var form_contacto = document.createElement("form");
    	form_contacto.setAttribute("method", "post");

    	var label_editar_contacto = document.createElement("label"); 
    	label_editar_contacto.setAttribute("for", "contacto_nueva");
        label_editar_contacto.setAttribute("class", "mr-5"); 
        label_editar_contacto.textContent = "Ingrese nuevo contacto ";
        label_editar_contacto.setAttribute("class", "pr-4");

        form_contacto.appendChild(label_editar_contacto); //Agrego al formulario

        var input_editar_contacto = document.createElement("input");
        input_editar_contacto.setAttribute("type", "text");
        input_editar_contacto.setAttribute("id", "contacto_nueva");
        input_editar_contacto.setAttribute("name", "contacto_nueva");


        form_contacto.appendChild(input_editar_contacto); //Agrego al formulario

        var boton_contacto_listo = document.createElement("button");
        boton_contacto_listo.setAttribute("type", "submit");
        boton_contacto_listo.setAttribute("class", "btn");
        boton_contacto_listo.setAttribute("class", "btn-secondary");
        boton_contacto_listo.setAttribute("class", "btn-sm");
        boton_contacto_listo.textContent ="Listo";

        form_contacto.appendChild(boton_contacto_listo); //Agrego al formulario



        //Boton cancelar edicion
        var boton_contacto_cancelar = document.createElement("button");
        boton_contacto_cancelar.setAttribute("type", "button");
        boton_contacto_cancelar.setAttribute("class", "btn");
        boton_contacto_cancelar.setAttribute("class", "btn-secondary");
        boton_contacto_cancelar.setAttribute("class", "btn-sm");
        boton_contacto_cancelar.textContent = "Cancelar";

        form_contacto.appendChild(boton_contacto_cancelar); //Agrego al formulario

        boton_contacto_cancelar.addEventListener("click", function(){
        	boton_editar_contacto.disabled=false;
        	form_contacto.reset();
        	items_contacto.removeChild(form_contacto);
        });        


        //Agrego al DOM
        var items_contacto = document.querySelector('#li_contacto');
        items_contacto.appendChild(form_contacto); //Agrego formulario de editar direccion al 'li' del html

    });




    //Al clickear el boton EDITAR - campo correo
    boton_editar_correo.addEventListener("click", function(){

    	boton_editar_correo.disabled=true;

    	var form_correo = document.createElement("form");
    	form_correo.setAttribute("method", "post");

    	var label_editar_correo = document.createElement("label"); 
    	label_editar_correo.setAttribute("for", "correo_nueva");
        label_editar_correo.setAttribute("class", "mr-5"); 
        label_editar_correo.textContent = "Ingrese nuevo correo ";
        label_editar_correo.setAttribute("class", "pr-4");

        form_correo.appendChild(label_editar_correo); //Agrego al formulario

        var input_editar_correo = document.createElement("input");
        input_editar_correo.setAttribute("type", "text");
        input_editar_correo.setAttribute("id", "correo_nueva");
        input_editar_correo.setAttribute("name", "correo_nueva");

        form_correo.appendChild(input_editar_correo); //Agrego al formulario

        var boton_correo_listo = document.createElement("button");
        boton_correo_listo.setAttribute("type", "submit");
        boton_correo_listo.setAttribute("class", "btn");
        boton_correo_listo.setAttribute("class", "btn-secondary");
        boton_correo_listo.setAttribute("class", "btn-sm");
        boton_correo_listo.textContent ="Listo";

        form_correo.appendChild(boton_correo_listo); //Agrego al formulario

        //Boton cancelar edicion
        var boton_correo_cancelar = document.createElement("button");
        boton_correo_cancelar.setAttribute("type", "button");
        boton_correo_cancelar.setAttribute("class", "btn");
        boton_correo_cancelar.setAttribute("class", "btn-secondary");
        boton_correo_cancelar.setAttribute("class", "btn-sm");
        boton_correo_cancelar.textContent = "Cancelar";

        form_correo.appendChild(boton_correo_cancelar); //Agrego al formulario



        boton_correo_cancelar.addEventListener("click", function(){
        	boton_editar_correo.disabled=false;
        	form_correo.reset();
        	items_correo.removeChild(form_correo);
        });


        //Agrego al DOM
        var items_correo = document.querySelector('#li_correo');
        items_correo.appendChild(form_correo); //Agrego formulario de editar direccion al 'li' del html

    });




          //<button type="button" class="btn btn-secondary btn-sm">Cancelar</button>








});