let modalins = new Modalins();

function abrirModal(){


  modalins.create({
      title:'En Transaccion',
      content:'#idContenido'
      }).then(function(result){
      console.log(result);
      })




}

function cerrarModal(){
  Modalins.close();
}
