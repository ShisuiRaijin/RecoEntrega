from flask import Flask
from BackEnd.api.Tienda.Tienda import TiendaEndpoint
from BackEnd.api.Producto.Producto import ProductoEndpoint
from flask_restful import reqparse, Api
from BackEnd.database.manager import Manager


app = Flask(__name__)
api = Api(app)
db = Manager()
post_parser = reqparse.RequestParser()

api.add_resource(TiendaEndpoint,
                 '/api/tienda/<int:id_tienda>',
                 '/api/tienda',
                 resource_class_kwargs={'database': db,
                                        'reqparser': post_parser})

api.add_resource(ProductoEndpoint,
                 '/api/tienda/<int:id_tienda>/productos',
                 '/api/tienda/<int:id_tienda>/productos/<int:id_producto>',
                 resource_class_kwargs={'database': db,
                                        'reqparser': post_parser})

if __name__ == '__main__':
    app.run(debug=True)