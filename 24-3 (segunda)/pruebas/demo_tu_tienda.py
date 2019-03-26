import os
import json
from flask import Flask,make_response,render_template,request, redirect,jsonify,Response
from flask_restful import url_for
from werkzeug.utils import secure_filename

from BackEnd.database.manager import Manager 
from BackEnd.resources.Producto.Producto import Producto
from BackEnd.resources.Tienda.Tienda import Tienda


mg=Manager()
app = Flask(__name__)
tienda=[]
app.config['IMG_PRODUCTOS'] = './static/img_productos'
app.config['IMG_TIENDAS'] = './static/img_tiendas'
app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024
extensiones_permitidas = set(['png', 'jpg', 'jpeg'])

def extension_valida(nombre):
    return '.' in nombre and \
           nombre.rsplit('.', 1)[1].lower() in extensiones_permitidas

@app.route('/tutienda',methods=['GET','POST'])
def tutienda():
    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('index.html'),200,headers)


@app.route('/usuario_tienda/<id_tienda>')
def usuario_tienda(id_tienda):
    global tienda 
    tienda=mg.extraer_tienda(id_tienda)
    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('vista_usuario_tienda.html'),200,headers)

@app.route('/carga_producto/<id_tienda_madre>', methods=['GET','POST'])

def carga_producto_id(id_tienda_madre):
    if request.method == 'POST':
        archivo=request.files['imagen_producto']
        nombre_archivo = secure_filename(archivo.filename)
        if not extension_valida(nombre_archivo):
            return render_template('carga_producto.html',mensaje='no se pduo cargar el archivo, el formato no es valido')
        else:
            archivo.save(os.path.join(app.config['IMG_PRODUCTOS'], nombre_archivo))
            #id_tienda=request.form['id_tienda']
            id_tienda=id_tienda_madre
            nombre_producto=request.form['nombre_producto']
            descripcion_producto=request.form['descripcion_producto']
            precio_producto=request.form['precio_producto']
            ruta_imagen_producto=str("/static/img_productos/"+nombre_archivo)
            #ruta_imagen_producto=request.form['ruta_imagen_producto']
            producto=Producto(id_tienda,nombre_producto,descripcion_producto,ruta_imagen_producto,precio_producto)
            mg.agregar_producto(producto,id_tienda)
            
            return redirect(url_for('usuario_tienda',id_tienda=id_tienda))

    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('carga_producto.html'),200,headers)



@app.route('/carga_producto', methods=['GET','POST'])

def carga_producto():
    if request.method == 'POST':
        archivo=request.files['imagen_producto']
        nombre_archivo = secure_filename(archivo.filename)
        if not extension_valida(nombre_archivo):
            return render_template('carga_producto.html',mensaje='no se pduo cargar el archivo, el formato no es valido')
        else:
            archivo.save(os.path.join(app.config['IMG_PRODUCTOS'], nombre_archivo))
            id_tienda=request.form['id_tienda']
            nombre_producto=request.form['nombre_producto']
            descripcion_producto=request.form['descripcion_producto']
            precio_producto=request.form['precio_producto']
            ruta_imagen_producto=str("/static/img_productos/"+nombre_archivo)
            #ruta_imagen_producto=request.form['ruta_imagen_producto']
            producto=Producto(id_tienda,nombre_producto,descripcion_producto,ruta_imagen_producto,precio_producto)
            mg.agregar_producto(producto,id_tienda)
            
            return redirect(url_for('usuario_tienda',id_tienda=id_tienda))

    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('carga_producto.html'),200,headers)

@app.route('/buscar',methods=['GET','POST'])
def busqueda():
    headers = {'Content-Type': 'text/html'}
    if request.method=='POST':
        buscar=request.form['buscar'] 
        global tienda
        tienda =mg.extraer_n_tiendas_orden(12,buscar)
        
        return make_response(render_template('index.html',))
        
    
    return make_response(render_template('index.html'),200,headers)

@app.route('/publico/<id_tienda>')
def publico(id_tienda):
    global tienda
    tienda=mg.extraer_tienda(id_tienda)
    return render_template('vista_publico_tienda.html')

@app.route('/buscar_categoria/<categoria>')
def buscar_categoria(categoria):
    global tienda
    tienda=mg.extraer_n_tiendas_orden(12,'desc',categoria,'categoria')
    return render_template('index.html')

@app.route('/inicio')
def inicio_js():
    global tienda
    tienda=mg.extraer_n_tiendas_orden(12,'aleatorio')
    return make_response(render_template('index.html'))

@app.route('/unt')
def unt():
    global tienda
    return (jsonify(tienda))

@app.route('/producto')
def prod():
    prod=mg.extraer_productos_tienda()
    return (jsonify(prod))

@app.route('/formulario',methods=['GET','POST'])
def formulario():
    if request.method=='POST':
        global tienda
        archivo=request.files['imagen_tienda']
        nombre_archivo = secure_filename(archivo.filename)
        if not extension_valida(nombre_archivo):
            return render_template('formulario.html',mensaje='no se pduo cargar el archivo, el formato no es valido') 
        else:
            archivo.save(os.path.join(app.config['IMG_TIENDAS'], nombre_archivo))
            nombre_tienda=request.form['nombre_tienda']
            direccion_tienda=request.form['direccion_tienda']
            correo_tienda=request.form['correo_tienda']
            celular_tienda=request.form['celular_tienda']
            ruta_imagen_tienda=str("/static/img_tiendas/"+nombre_archivo)
            #ruta_imagen_tienda=request.form['ruta_imagen_tienda']
            categoria_tienda=request.form['categoria_tienda']
            print(categoria_tienda)
            metadata_tienda=request.form['contrasena_tienda']
            nueva_tienda=Tienda(nombre_tienda,direccion_tienda,categoria_tienda,ruta_imagen_tienda,correo_tienda,celular_tienda,metadata_tienda)
            id_real=mg.agregar_tienda(nueva_tienda)
            tienda=mg.extraer_tienda(id_real)

            return redirect(url_for('usuario_tienda',id_tienda=id_real))


        
    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('formulario.html'),200,headers)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port='8000',debug=True)

          