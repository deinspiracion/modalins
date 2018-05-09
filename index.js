let modalins = new Modalins();
function abrirModal(){


modalins.create({
    title:'En Transaccion',
    content:'Esta seguro que desea continuar',
    confirmText:'Aceptar',
    CancelalText:'Cancelar',
    style:"normal",
    loading:true,
    type:'input',
    typeInput:"number"

  }).then(function(result){
    console.log(result);

  })




}

function cerrarModal(){
  Modalinsp.close();
}
