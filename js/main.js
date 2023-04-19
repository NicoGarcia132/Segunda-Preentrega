const navBar = document.querySelector("#navBar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    navBar.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navBar.classList.remove("visible");
})