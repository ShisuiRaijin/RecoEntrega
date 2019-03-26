import sqlite3
from .db_base import Basedatos
from ...resources.Producto.Producto import Producto

class Db_productos(Basedatos):
    """Permite interactuar con la tabla productos."""
    
    def agregar_producto(self, producto,id_tienda_madre):
        """Recibe objeto Producto a guardar y  objeto Tienda al que esta relacionado.
        
        Asigna automaticamente un id unico a cada producto y lo relaciona con el id su tienda,
        No se insertaran productos cuando exista otro registro con el cual coincida exactamente
        la combinacion de los datos de 'nombre', 'descripcion','ruta_imagen'
        e 'id_tienda_madre' """
        if isinstance(producto, Producto):

            datos_producto = [id_tienda_madre,
                              producto.nombre_producto,
                              producto.descripcion_producto,
                              producto.imagen_producto,
                              producto.precio_producto,
                              producto.metadata_producto
                              ]
            try:
                self.conectar_base_datos()
                self.cursor.execute('''INSERT INTO productos(
                                        id_tienda_madre,nombre,descripcion,
                                        ruta_imagen,precio,metadata) VALUES 
                                        (?,?,?,?,?,?);''', datos_producto)
                self.commit()
                self.cerrar_conexion()
                
            except sqlite3.IntegrityError:
                return False

    def modificar_datos_producto(self, id_producto, nombre_columna, datos_nuevos):
        """Modifica los datos almacenados en la base de datos, correspondientes 
        al id del producto, necesariamente se deben pasar los tres parámetros 
        requeridos, id del producto, nombre de la columna a modificar y el dato nuevo."""

        try:
            self.conectar_base_datos()
            self.cursor.execute("UPDATE productos SET {} = ? WHERE id = ?;"
								.format(nombre_columna), [datos_nuevos, id_producto])
            self.commit()
            self.cerrar_conexion()
            
        except sqlite3.OperationalError :
            return False
    
    def no_hay_coincidencias_producto(self):
        return([
                {
                    "imagen_producto" : "Nulo",
                    "nombre_producto" : "Nulo",
                    "precio_producto" : "Nulo",
                    "descripcion_producto" : "Nulo",
                   
                }
            ])

    def devolver_lista_productos(self,producto):
        """ Se utiliza internamente, toma una lista con los resultados de una 
        consulta a la tabla productos, devuelve una lista de objetos Producto"""

        lista_dict_productos=[]
        for registro in producto:
            dict_obj= {
                "id_producto" : str(registro[0]),
                "nombre_producto" : registro[1],
                "descripcion_producto" : registro[2],
                "categoria" : registro[3],
                "precio_producto" : registro[4],
                "metadata_producto" : registro[5],
                "id_tienda_madre" : registro[6],
            }
            lista_dict_productos.append(dict_obj)

        return (lista_dict_productos)

    def extraer_productos_tienda(self,id_tienda=''): 
        """Recibe un id de Tienda, retorna lista de todos los objetos Producto relacionados 
        a ella. Si no se le especifica el parametro devuelve 20 productos al azar"""

        if type(id_tienda)==int:
            id_tienda='WHERE id_tienda_madre ={} '.format(id_tienda)
        else:
            id_tienda='ORDER BY random() LIMIT 20'
        
        self.conectar_base_datos()
        self.cursor.execute( " SELECT * FROM productos {};".format(id_tienda))
        
        productos = self.cursor.fetchall()
        self.cerrar_conexion()
        if len(productos)==0:
            return self.no_hay_coincidencias_producto()
        else:
            return self.devolver_lista_productos(productos)


    def extraer_productos_coinciden(self,n=10,contiene ='',columna=
                                'nombre||descripcion||precio',orden='desc'):
        """Devuelve 10 ultimos productos, puede buscar coincidencia en columnas y 
        variar el orden.

        Acepta parametros: n, orden, contiene y columna. El parametro n debe ser un
        numero entero representa la cantidad maxima de objetos a devolver, orden puede ser
        'desc' (descendente),'asc'(ascendente) o 'aleatorio'; 'contiene' representa
        el contenido que se desea buscar y 'columna' el nombre de la columna en la tabla.
        Devuelve una lista de Productos ordenada segun el parametro 'orden'.
        """

        if columna != 'nombre' and columna != 'descripcion' and columna != 'precio':
            columna = 'nombre||descripcion||precio'

        self.conectar_base_datos()
        if orden != 'desc' and orden != 'asc' and orden !='aleatorio':
            orden='desc'
        if orden == "aleatorio":
            self.cursor.execute("SELECT * FROM productos WHERE {} LIKE '%{}%' ORDER BY random() LIMIT ?;".format(columna,contiene),[n])
        else:
            self.cursor.execute("SELECT * FROM productos WHERE {} LIKE '%{}%' ORDER BY id_producto {} LIMIT ?;".format(columna,contiene,orden),[n])
            
        productos = self.cursor.fetchall()
        self.cerrar_conexion()
        if len(productos) == 0:
            return [self.no_hay_coincidencias_producto()]
        else:
            return self.devolver_lista_productos(productos)
    
    def borrar_producto(self, id_producto, id_tienda):

        """Recibe id_producto e id_tienda y borra el producto"""
        try:
            self.conectar_base_datos()
            self.cursor.execute("DELETE FROM productos WHERE id_producto = ? AND id_tienda_madre = ?;", [id_producto, id_tienda])
            self.commit()
        except sqlite3.OperationalError:
            return False
 

