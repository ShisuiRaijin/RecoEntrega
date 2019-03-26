from flask import Flask, render_template
from flask_restful import reqparse, Api, Resource

from BackEnd.api.Producto.Productos import ProductosEndpoint
from BackEnd.api.Tienda.Tienda import TiendaEndpoint
from BackEnd.api.Producto.Producto import ProductoEndpoint
from BackEnd.api.Tienda.Tiendas import TiendasEndpoint
from BackEnd.database.manager import Manager


app = Flask(__name__, static_folder='FrontEnd')
api = Api(app)
db = {'database': Manager()}

api.add_resource(TiendasEndpoint,
                 '/api/tiendas',
                 resource_class_kwargs=db)

api.add_resource(TiendaEndpoint,
                 '/api/tiendas/<int:id_tienda>',
                 resource_class_kwargs=db)

api.add_resource(ProductosEndpoint,
                 '/api/tiendas/<int:id_tienda>/productos',
                 resource_class_kwargs=db)

api.add_resource(ProductoEndpoint,
                 '/api/tiendas/<int:id_tienda>/productos/<int:id_producto>',
                 resource_class_kwargs=db)


if __name__ == '__main__':
    app.run(debug=True)