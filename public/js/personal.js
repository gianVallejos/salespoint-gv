function mostrarDetallePersonal(php_data) {
    console.log(JSON.parse(php_data));
    data = JSON.parse(php_data);
    $('#nombres-txt').text(data["nombres"] + " " + data["apellidos"]);
    $('#dni-txt').text(data["dni"]);
    $('#email').text(data["email"]);
    $('#fechanacimiento-txt').text(data["fechanacimiento"]);
    $('#telefono-txt').text(data["telefono"]);
    $('#genero-txt').text(data["genero"]);
    $('#direccion-txt').text(data["direccion"]);
}