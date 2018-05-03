let modalinsp = new Modalins();
function abrirModal(){


modalinsp.crear({
    titulo:'Titulo del Modal',
    contenido:'Ingresa un dato',
    botonAceptarText:'Aceptar',
    botonCancelarText:'cancelar ',
    colorBotonAceptar:'#eee',
    input:true,
    tipoInput:"number"

  }).then(function(result){
    console.log(result);
    if(result=="aceptar"){

    }
  })




}

function cerrarModal(){
  Modalinsp.cerrar();
}
