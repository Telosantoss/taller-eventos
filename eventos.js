document.getElementById("saludarButton").onclick = function() {
    alert("Hola!");
};

document.addEventListener("DOMContentLoaded", function() {
    var modificarboton = document.getElementById("modificarboton");
    modificarboton.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});


