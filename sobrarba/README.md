# RecoLab

Instalacion:
  -descargar docker para windowscorrer en la terminal: docker pull python
  -git pull https://github.com/ShisuiRaijin/RecoLab.git (se descarga donde estas parado con la terminal)
  -en docker-compose.yml cambiar el path de "volumes" (la primera parte antes de los dos puntos) a el path donde se descargo el proyecto
  -correr en la terminal: docker-compose build (hay que estar con la terminal parado en la carpeta del proyecto)
  -correr en la terminal: docker-compose up -d (para levantar la api)
  -para hacer pedidos a la api usen esta url: localhost:5000 (si hicieron todo bien hasta ahora deberia salir un mensaje)

Para subir al repositorio se usan los siguientes comandos(para usar estos comandos se tiene que estar parado en la carpeta del proyecto con la terminal):
  -git add . (para agregar todos los cambios que hicimos a git)
  -git commit -m "mensaje para el commit" (un commit seria subir los cambios que se diferencian de la rema original, osea los que hicimos nosotros desde el ultimo commit)
  -git push (es para subir todos los commits al repositorio remoto)

Si se quiere crear una branch (rama) nueva se utiliza el siguiente comando:
  -git checkout -b "el nombre de la branch que quieren crear" (quizas cuando quieran pushear desde su rama les diga un error y les muestre    un comando mas largo, si es la primera vez que pushean a la branch, copian el comando y lo corren solo esa vez)

cuando tienen una funcionalidad completa o quieren subir el codigo a la rama maestra, hacen una pull request, en esta pagina, y agregan algunos de nosotros para que revisemos los cambios y aprovemos la subida

todos los cambios que se hacen en la carpeta del proyecto se actualizan solos en la api al refrescar la pagina.
