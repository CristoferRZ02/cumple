$(function(){
    getUsuarios();
});

url='http://localhost/EJERCICIO_PRUEBA/API/usuarioController.php';
function getUsuarios(){
    $('#contenido').empty();
    $.ajax({
        type:'GET',
        url:url,
        dataType:'json',
        success: function(respuesta){
            var usuarios = respuesta;
            if(usuarios.length > 0){
                jQuery.each(usuarios,function(i,prod){
                    var btnEditar = '<button class="btn btn-warning"><i class="fa-solid fa-edit"></i></button>';
                    var btnEliminar = '<button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>';
                    $('#contenido').append('<tr></tr>'+i+'</td><td>'+prod.id_usuario+'</td><td>'+prod.nombre_usuario+' '+prod.apellido_paterno_usuario+' '+
                    prod.apellido_materno_usuario+'</td><td>'+prod.correo_electronico+'</td><td>'+prod.direccion+'</td><td>'
                    +prod.telefono+'</td><td>'+prod.fecha_nacimiento+'</td><td>'+'edad'+'</td><td>'+btnEditar+'</td><td>'+btnEliminar);
                });
            }
        },
        error:function(){
            showAlerta('Error al mostrar los usuarios','error')
        }
    });
}



function showAlerta(mensaje,icono,foco){
    if(foco !==""){
        $('#'+foco).trigger('focus');    
    }

    Swal.fire({
        title:mensaje,
        icon:icono,
        customClass: {confirmButton: 'btn btn-primary', popup:'animated xoomIn'},
        buttonsStyling:false
    });
}