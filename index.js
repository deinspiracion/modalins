let modalins = new Modalins();

function abrirModal(){


  modalins.create({
      title:'En Transaccion',
      content:'Esta seguro que desea continuar'
      }).then(function(result){
      console.log(result);
      })




}

function cerrarModal(){
  Modalins.close();
}
