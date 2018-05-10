let modalins = new Modalins();

function abrirModal(){


  modalins.create({
      title:'En Transaccion',
      content:'Cargando',
      loading:true,
      }).then(function(result){
      console.log(result);
      })




}

function cerrarModal(){
  Modalins.close();
}
