from flask_restful import fields, marshal_with, Resource


class ProductoEndpoint(Resource):

    def __init__(self, **kwargs):
        self.db = kwargs['database']

    def delete(self, id_tienda, id_producto):
        self.db.borrar_producto(id_producto, id_tienda)
        return '', 204