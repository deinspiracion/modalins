let modalins = new Modalins();
function abrirModal(){


modalins.crear({
    titulo:'En Transaccion',
    contenido:'Ingrese un número por favor',
    botonAceptarText:'Aceptar',
    botonCancelarText:'Cancelar',
    colorBotonAceptar:'',
    input:true,
    tipoInput:"number"

  }).then(function(result){
    console.log(result);

  })




}

function cerrarModal(){
  Modalinsp.cerrar();
}
