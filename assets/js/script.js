
//no me funciona el carrusel, agregue este bloque de codigo , pero al parecer no funciona 
//no salen los puntos abajo de la fotos
$(document).ready(function () {
    $(".carousel").carousel({
        interval: 800
    })
});


// aca esta mostrando una ventana de alerta utilizando un tooltio
$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente");
    });
});

//aca esta el esta el evento dblclick por selector de etiqueta cambiando el color del titulo de las
//recetas

$(document).ready(function () {
    $("h4").dblclick(function () {
        $(this).css("color", "red");


    });

});

//aca esta el metodo toggle por selector por clase, haciendo aparecer y desaparecer
//el contenido de las cards con presionar el titulo


$(document).ready(function () {
    $(".card-title").click(function () {
        $(".card-text").toggle();

    });
});