var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'clave',
    database: 'universidades'
});

connection.connect((err) => {
    if (err) {
        console.log("No se logro conectar a la base de datos", err);
    } else {
        console.log("La conexión ha sido existosa");
    }
    connection.end();
});