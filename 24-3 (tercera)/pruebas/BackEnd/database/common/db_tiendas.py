import sqlite3
from .db_base import Basedatos
from ...resources.Tienda.Tienda import Tienda



class Db_tiendas(Basedatos):
    """Permite interactuar con la talba tiedas"""

    def agregar_tienda(self, tienda):
        """Recibe un objeto de la clase Tienda y permite insertar sus datos en la 
        tabla tiendas."""
        if isinstance(tienda,Tienda):

            datos_tienda = [tienda.nombre_tienda, tienda.direccion_tienda,tienda.categoria,
             tienda.imagen_portada_tienda,tienda.correo_tienda,tienda.telefono_tienda,tienda.metadata_tienda]
            try:
                self.conectar_base_datos()
                self.cursor.execute('''INSERT INTO tiendas(
                                        nombre,direccion,categoria,
                                        ruta_imagen,correo,telefono,metadata) VALUES 
                                        (?,?,?,?,?,?,?);''', datos_tienda)
                self.commit()
                self.cursor.execute("SELECT id_tienda FROM tiendas ORDER BY id_tienda DESC LIMIT 1")
                id_t=self.cursor.fetchone()
                self.cerrar_conexion()
                return id_t[0]
            except sqlite3.IntegrityError :
                return False

    def modificar_datos_tienda(self, id_tienda, nombre_columna, datos_nuevos):
        """Modifica los datos almacenados en la base de datos, correspondientes 
        al id de la tienda, necesariamente se deben pasar los tres parámetros 
        requeridos, id de la tienda, nombre de la columna a modificar y el dato nuevo."""

        try:
            self.conectar_base_datos()
            self.cursor.execute("UPDATE tiendas SET {} = ? WHERE id_tienda = ?;"
								.format(nombre_columna), [datos_nuevos, id_tienda])
            self.commit()
            self.cerrar_conexion()
            return 
        except sqlite3.OperationalError:
            return False

    def devolver_lista_tiendas(self,tiendas):
        """Se utiliza internamente, toma una lista con los resultados de una consulta a
        la tabla tiendas y devuelve una lista de objetos Tienda"""

        #lista_tiendas = []
        lista_dict_tiendas=[]
        for registro in tiendas:
            dict_obj= {
                "id_tienda" : str(registro[0]),
                "nombre_tienda" : registro[1],
                "direccion_tienda" : registro[2],
                "categoria_tienda" : registro[3],
                "imagen_portada_tienda" : registro[4],
                "contacto" : registro[6],
                "correo_electronico" : registro[5],
                "meta_data" : registro[7]
            }
            lista_dict_tiendas.append(dict_obj)

        return (lista_dict_tiendas)
    def no_hay_coincidencias(self): 
        """Se utiliza internamente, genera un objeto Tienda con datos por defecto 
        para devolver en consultas que no arrojen resultados"""

        #return(Tienda('nulo','nulo','nulo','nulo','nulo','nulo','nulo'))
        return([
                {
                    "id_tienda" : 'nulo',
                    "nombre_tienda" : "Nulo",
                    "direccion_tienda" : "Nulo",
                    "categoria" : "Nulo",
                    "imagen_portada_tienda" : "Nulo",
                    "contacto" : "Nulo",
                    "correo_electronico" : "Nulo"
                }
            ])

    def extraer_todas_tiendas(self):
        """Devuelve una lista de objetos de todas las tiendas almacenadas en la base 
        de datos"""

        self.conectar_base_datos()
        self.cursor.execute("SELECT * FROM tiendas")
        tiendas = self.cursor.fetchall()
        self.cerrar_conexion()
        
        if len(tiendas)==0:
            return self.no_hay_coincidencias()
        else:
            return self.devolver_lista_tiendas(tiendas)

    def extraer_tienda(self, id_tienda=0): 
        """Extrae los datos de la tabla tiendas referentes al parámetro id.
        
        El cual debe recibir necesariamente, retorna un objeto de clase Tienda 
        generado a partir de los datos obtenidos, se puede almacenar en una variable 
        que se debe asignar en la declaración
        Ej: tienda_recuperada=Basedatos.extraer_tienda(id)
        Si la busqueda no obtiene resultados devuelve un objeto por Tienda por defecto 
        """
        self.conectar_base_datos()
        self.cursor.execute("SELECT * FROM tiendas WHERE id_tienda = ?;", [id_tienda])
        tienda = self.cursor.fetchone()
        self.cerrar_conexion()

        if str(tienda)== 'None': #verifica que la consulta devuelva algun dato
            return self.no_hay_coincidencias() #objeto con datos por defecto
        else:
            return self.devolver_lista_tiendas([tienda])
    
    def extraer_n_tiendas_orden(self,n=10,orden='desc',contiene ='',columna=
                                'nombre||direccion||categoria||correo'):
        """Devuelve 10 ultimas tiendas, puede buscar coincidencia en columnas y variar el orden.
        Acepta parametros: n, orden, contiene y columna.El parametro n debe ser un
        numero entero representa la cantidad maxima de objetos a devolver, orden puede ser
        'desc' (descendente),'asc'(ascendente) o 'aleatorio'; 'contiene' representa
        el contenido que se desea buscar y 'columna' el nombre de la columna en la tabla.
        Devuelve una lista de Tiendas ordenada segun el parametro 'orden'. 
        """
        self.conectar_base_datos()
        if columna !='nombre' and columna != 'direccion' and columna !='categoria' and columna != 'correo':
            columna='nombre||direccion||categoria||correo' 
        
        if orden != 'desc' and orden != 'asc' and orden !='aleatorio':
            orden='desc'
        if orden == "aleatorio":
            self.cursor.execute("SELECT * FROM tiendas WHERE {} LIKE '%{}%' ORDER BY random() LIMIT ?;".format(columna,contiene),[n])
        else:
            self.cursor.execute("SELECT * FROM tiendas WHERE {} LIKE '%{}%' ORDER BY id_tienda {} LIMIT ?;".format(columna,contiene,orden),[n])     
        tiendas = self.cursor.fetchall()
        self.cerrar_conexion()
        if len(tiendas)==0:
            return self.no_hay_coincidencias()#devuelde el objeto en una lista porque supuse que es lo que se espera recibir,aunque solo tiene un objeto vacio
        else:
            return self.devolver_lista_tiendas(tiendas)
		
    def borrar_tienda(self, id_tienda):
        """Borra los datos almacenados en la base de datos, correspondientes al id de 
        la tienda, necesariamente se debe pasar el parámetro requerido id de la tienda
        a borrar"""

        try:
            self.conectar_base_datos()
            self.cursor.execute("DELETE FROM productos WHERW id_tienda_madre = ?;",[id_tienda])
            self.cursor.execute("DELETE FROM tiendas WHERE id_tienda = ?;", [id_tienda])
            self.commit()
            self.cerrar_conexion()
        except sqlite3.IntegrityError:
            return False
            
    