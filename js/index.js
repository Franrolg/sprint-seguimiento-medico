let usuarios = [{ email: 'prueba@gmail.com', password: '12345' }]

$(document).ready(function () {
    $('#inicio-sesion-btn').on('click', function () {
        email = $('#email').val();
        password = $('#password').val();
        let verificar = false
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].email == email && usuarios[index].password == password) {
                verificar = true
                break;
            }
        }
        if (!verificar){ 
            $('#error-inicio-sesion').html("Error al iniciar sesión"); 
            $('#error-inicio-sesion').css("color", "red"); 
            
        } else { 
            $(location).prop('href', '/paginas/principalpriv.html')
        }
    });
});