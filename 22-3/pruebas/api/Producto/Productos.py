from flask_restful import fields, marshal_with, Resource
from BackEnd.resources.Producto.Producto import Producto
from flask_restful import reqparse


class ProductosEndpoint(Resource):

    def __init__(self, **kwargs):
        self.db = kwargs['database']
        self.post_parser = reqparse.RequestParser()
        self.load_arguments()

    producto_fields = {
        'id_producto': fields.Integer,
        'id_tienda': fields.Integer,
        'nombre_producto': fields.String,
        'descripcion_producto': fields.String,
        'imagen_producto': fields.String,
        'precio_producto': fields.Integer,
        'metadata_producto':fields.String
    }

    @marshal_with(producto_fields)
    def get(self, id_tienda):
        if type(id_tienda) is not int:
            return 404

        return self.db.extraer_productos_tienda(id_tienda)

    @marshal_with(producto_fields)
    def post(self, id_tienda):
        if type(id_tienda) is not int:
            return 404

        args = self.post_parser.parse_args()

        producto = Producto(nombre_producto=args['nombre_producto'],
                            descripcion_producto=args['descripcion_producto'],
                            imagen_producto=args['imagen_producto'],
                            precio_producto=args['precio_producto'],
                            metadata_producto=args['metadata_producto'],
                            id_tienda=id_tienda)

        self.db.agregar_producto(producto)
        return producto, 200


    def load_arguments(self):
        self.post_parser.add_argument(
            'nombre_producto', dest='nombre_producto',
            location='form', required=True
        )
        self.post_parser.add_argument(
            'descripcion_producto', dest='descripcion_producto',
            location='form', required=True
        )
        self.post_parser.add_argument(
            'imagen_producto', dest='imagen_producto',
            location='form', required=True
        )
        self.post_parser.add_argument(
            'precio_producto', dest='precio_producto',
            location='form', required=True
        )
        self.post_parser.add_argument(
            'metadata_producto', dest='metadata_producto',
            location='form', required=False
        )
