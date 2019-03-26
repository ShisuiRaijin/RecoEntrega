import os
import json
from flask import Flask,make_response,render_template,request, redirect,jsonify
from flask_restful import url_for
from werkzeug.utils import secure_filename

from BackEnd.database.manager import Manager 
from BackEnd.resources.Producto.Producto import Producto
from BackEnd.resources.Tienda.Tienda import Tienda

mg=Manager()
app = Flask(__name__)


@app.route('/tutienda',methods=['GET','POST'])
def tutienda():
    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('index.html'),200,headers)


@app.route('/tienda_publicada/<numero>',methods=['GET','POST'])
def tienda_publicada(numero):
    tienda=mg.extraer_tienda(numero)
    nombre=tienda.nombre_tienda
    direccion=tienda.direccion_tienda
    correo=tienda.correo_tienda
    categoria=tienda.categoria
    telefono=tienda.correo_tienda
    return make_response(render_template('vista_publico_tiendas.html',telefono_tienda=telefono,categoria_tienda=categoria,nombre_tienda=nombre,direccion_tienda=direccion,correo_tienda=correo))


@app.route('/buscar',methods=['GET','POST'])

def busqueda():
    headers = {'Content-Type': 'text/html'}
    if request.method=='POST':
        buscar=request.form['buscar'] 
        tienda=mg.extraer_n_tiendas_orden(5,buscar)[0]
        
        nombre=tienda.nombre_tienda
        direccion=tienda.direccion_tienda
        correo=tienda.correo_tienda
        categoria=tienda.categoria
        telefono=tienda.telefono_tienda
        return make_response(render_template('vista_publico_tiendas.html',telefono_tienda=telefono,categoria_tienda=categoria,nombre_tienda=nombre,direccion_tienda=direccion,correo_tienda=correo))
       # return make_response(render_template('index.html'),200,headers)#aca deve enviar a resultaods de busqueda por ahora puese esa pagina 
    
    return make_response(render_template('index.html'),200,headers)
    

    
@app.route('/formulario',methods=['GET','POST'])
def formulario():
    if request.method=='POST':
        nombre_tienda=request.form['nombre_tienda']
        direccion_tienda=request.form['direccion_tienda']
        correo_tienda=request.form['correo_tienda']
        telefono_tienda=request.form['telefono_tienda']
        ruta_imagen_tienda=request.form['ruta_imagen_tienda']
        categoria_tienda=request.form['categoria_tienda']
        metadata_tienda=request.form['contrasena_tienda']
        tienda=Tienda(nombre_tienda,direccion_tienda,categoria_tienda,ruta_imagen_tienda,correo_tienda,telefono_tienda,metadata_tienda)
        mg.agregar_tienda(tienda)
        tienda=mg.extraer_n_tiendas_orden(1,nombre_tienda)[0]
        
        nombre=tienda.nombre_tienda
        direccion=tienda.direccion_tienda
        correo=tienda.correo_tienda
        categoria=tienda.categoria
        telefono=tienda.telefono_tienda
        next = request.args.get('next', None)
        if next:
            return redirect(next)
        return make_response(render_template('vista_usuario_tienda.html',telefono_tienda=telefono,categoria_tienda=categoria,nombre_tienda=nombre,direccion_tienda=direccion,correo_tienda=correo))
        

    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('formulario.html'),200,headers)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='8000',debug=True)

          