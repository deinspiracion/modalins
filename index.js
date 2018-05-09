let modalins = new Modalins();
function abrirModal(){


modalins.crear({
    titulo:'En Transaccion',
    contenido:'Esta seguro que desea continuar',
    botonAceptarText:'Aceptar',
    botonCancelarText:'Cancelar',
    estilo:"rojo",
    loading:true,
    tipo:'input',
    tipoInput:"number"

  }).then(function(result){
    console.log(result);

  })




}

function cerrarModal(){
  Modalinsp.cerrar();
}
