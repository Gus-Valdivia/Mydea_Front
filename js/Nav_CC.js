let count_n = document.getElementById("btn_count_nav");
let count2_n = document.getElementById("btn_count2_nav");
let edt_n = document.getElementById("btn_edit_nav");
let sav_n = document.getElementById("btn_sav_nav");
let sav2_n = document.getElementById("btn_sav2_nav");
let res_n = document.getElementById("btn_res_nav");
let lgout_n = document.getElementById("btn_lgout_nav");
let edt_h = document.getElementById("btn_edit_h");
let sav_h = document.getElementById("btn_guardado_h");
let lgout_h = document.getElementById("btn_lgout_h");
let sb_nav = document.getElementById("btn_sb_nav");

count_n.addEventListener("click", () => {
    window.location.href = "Cuenta.html";
});

count2_n.addEventListener("click", () => {
    window.location.href = "Cuenta.html";
});

edt_n.addEventListener("click", () => {
    window.location.href = "Editar_Cuenta.html";
});

sav_n.addEventListener("click", () => {
    window.location.href = "Guardados.html";
});

sav2_n.addEventListener("click", () => {
    window.location.href = "Guardados.html";
});

res_n.addEventListener("click", () => {
    window.location.href = "Comentarios_Hechos.html";
});

lgout_n.addEventListener("click", () => {
    Swal.fire({
        title: "¿Está seguro de cerrar sesión?",
        text: "Una vez que cierre sesión, deberá volver a iniciar sesión para acceder.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(244, 55, 112, 0.8)",
        cancelButtonColor: "#971A40",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar la lógica para cerrar la sesión
            // Redirección o cualquier otra acción necesaria
            // Por ejemplo: window.location.href = "logout.php";
        }
    });
});


edt_h.addEventListener("click", () => {
    window.location.href = "Editar_Cuenta.html";
});

sav_h.addEventListener("click", () => {
    window.location.href = "Guardados.html";
});

lgout_h.addEventListener("click", () => {
    Swal.fire({
        title: "¿Está seguro de cerrar sesión?",
        text: "Una vez que cierre sesión, deberá volver a iniciar sesión para acceder.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(244, 55, 112, 0.8)",
        cancelButtonColor: "#971A40",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar la lógica para cerrar la sesión
            // Redirección o cualquier otra acción necesaria
            // Por ejemplo: window.location.href = "logout.php";
        }
    });
});

sb_nav.addEventListener("click", () => {
    window.location.href = "CrearNegocio_Info.html";
});