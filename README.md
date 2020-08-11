# nodeconnectionmysql

 1 - Levantar base de datos

 Con docker:
     >> docker run --name mysqlcontainer -p 3306:3306 -e MYSQL_ROOT_PASSWORD=clave -e MYSQL_DATABASE=universidades -d mysql:5.7.30

 Con docker-compose:
     >> docker-compose up

 2 - Instalar dependencias de app
 
npm install

 3 - Probar app
 
npm start

La salida debiese ser:

La conexión ha sido existosa

