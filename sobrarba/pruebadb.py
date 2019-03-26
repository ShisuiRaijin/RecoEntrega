from BackEnd.database.manager import Manager
from BackEnd.resources.Producto.Producto import Producto
from BackEnd.resources.Tienda.Tienda import Tienda

mg=Manager()

p=mg.extraer_productos_coinciden(3,'buen')
"""
tienda2=Tienda('segunda teinda','otra calle 2','ropa','ruta imagen 2','correo@2')
tienda3=Tienda('tercer tienda','en calle 3','cosmeticos','ruta imagen 3','correo@3')
producto= Producto('segundo produco','soy un mal producto','ruta imagen',3334)
"""



for el in p:
    print(el)
ts=mg.extraer_todas_tiendas()

print('todas las tiendas.id')
for t in ts:
    print (t.id_tienda)
	
print('todas las tiendas.nombre')
for t in ts:
    print (t.nombre_tienda)
	
print('tienda id=3')
tienda_recuperada=mg.extraer_tienda(3)
print (tienda_recuperada)

tienda_recuperada=mg.extraer_tienda(5)
print('tienda id 5')
print (tienda_recuperada)

print('productos tienda id :9')
pr=mg.extraer_productos_tienda(9)
for el in pr:
	print(el)
	
print('productos que coinciden con -mal producto-')	
pr=mg.extraer_productos_coinciden(4,'mal producto')
for p in pr:
	print(p)