var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var correo = $("#itMail").val();
        var asunto = $("#itAsunto").val();

        if(nombre == ""){
            $("#mensaje1").fadeIn();

            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(correo == "" || !expr.test(correo)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(asunto == ""){
                   $("#mensaje3").fadeIn();
                   return false;
                }
            }
        }
    });
});
    

