document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.querySelector("h1");
    let colores = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];
    let index = 0;

    setInterval(() => {
        titulo.style.color = colores[index];
        index = (index + 1) % colores.length;
    }, 1000);
});
