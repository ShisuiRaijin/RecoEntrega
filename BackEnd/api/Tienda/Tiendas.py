from flask_restful import fields, marshal_with, Resource, output_json
from flask import jsonify
from BackEnd.resources.Tienda.Tienda import Tienda
from flask_restful import reqparse

class TiendasEndpoint(Resource):

    def __init__(self, **kwargs):
        self.db = kwargs['database']
        self.post_parser = reqparse.RequestParser()
        self.load_arguments()

    tienda_fields = {
        'id_tienda': fields.Integer,
        'nombre_tienda': fields.String,
        'direccion_tienda': fields.String,
        'categoria': fields.String,
        'imagen_portada_tienda': fields.String,
        'telefono_tienda': fields.String,
        'correo_tienda' : fields.String,
        'metadata_tienda' : fields.String,

    }

    @marshal_with(tienda_fields)
    def get(self):
        return self.db.extraer_todas_tiendas(), 200

    def post(self):
        args = self.post_parser.parse_args()

        tienda = Tienda(args['nombre_tienda'],
                        args['direccion_tienda'],
                        args['categoria'],
                        args['imagen_portada_tienda'],
                        args['correo_tienda'],
                        args['telefono_tienda'],                  
                        args['metadata_tienda']
                        )

        self.db.agregar_tienda(tienda)
        return tienda, 200

    def load_arguments(self):
        self.post_parser.add_argument(
            'nombre_tienda', dest='nombre_tienda',
            location='form', required=True
        )
        self.post_parser.add_argument(
            'direccion_tienda', dest='direccion_tienda',
            location='form',
            required=True
        )
        self.post_parser.add_argument(
            'categoria', dest='categoria',
            location='form',
            required=True
        )
        self.post_parser.add_argument(
            'imagen_portada_tienda', dest='imagen_portada_tienda',
            location='form',
            required=True
        )
        self.post_parser.add_argument(
            'telefono_tienda', dest='telefono_tienda',
            location='form',
            required=True
        )
        self.post_parser.add_argument(
            'correo_tienda', dest='correo_tienda',
            location='form',
            required=True
        )
        self.post_parser.add_argument(
            'metadata_tienda', dest='metadata_tienda',
            location='form',
            required=False
        )
    