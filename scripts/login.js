function addUser() {
    const correo = "ai@gmail.com" //document.getElementById("signInEmail").value;
    const nombre = "aitana" //document.getElementById("nombre").value;
    const password = "1234" //document.getElementById("signInPass").value;

    var usuarios;
    class user {
        constructor(nombre, correo, password) {
            this.nombre = nombre;
            this.correo = correo;
            this.password = password;
        }
    }
};

const btn = document.getElementById("btnRegister");
btn.onclick = function() {
    addUser();
}


addUser();