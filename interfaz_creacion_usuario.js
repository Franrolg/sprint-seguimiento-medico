$(document).ready(function(){
    $("#crear-usuario").click(function(){
      var nombre = $("#nombre-usuario").val();
      var edad = $("#edad-usuario").val();
      var identificacion = $("#identificacion-usuario").val();
      
      $("#lista-usuarios").append(
        "<tr>" +
        "<td>" + nombre + "</td>" +
        "<td>" + edad + "</td>" +
        "<td>" + identificacion + "</td>" +
        "<td><button class='btn btn-danger borrar-usuario'>Borrar</button></td>" +
        "</tr>"
      );
    });
    
    $("#lista-usuarios").on("click", ".borrar-usuario", function(){
      $(this).closest("tr").remove();
    });
  });
