
class Modalins {constructor() {let body;};
crear(obj){
    this.body = document.getElementsByTagName("body")[0];
    //this.body.classList.add("back");


    let contentFooter="";
    let input =`<input class="input-modal" type="${obj.tipoInput || "text"}" name="" value="">`;
    let colorBotonAceptar=obj.colorBotonAceptar || "";


    if (obj.botonAceptarText!="" && obj.botonCancelarText=="") {
    contentFooter +=`  <button type="button" id="btn-aceptar" style="background-color:${colorBotonAceptar}"  name="button">${obj.botonAceptarText}</button>`
    }

    if (obj.botonAceptarText=="" && obj.botonCancelarText!="") {
        contentFooter +=`  <button type="button" id="btn-aceptar" style="background-color:${colorBotonAceptar}"  name="button">${obj.botonCancelarText}</button>`
    }

    if (obj.botonAceptarText!="" && obj.botonCancelarText!="") {
        contentFooter +=` <button type="button" id="btn-aceptar" style="background-color:${colorBotonAceptar}" name="button">${obj.botonAceptarText}</button>
                          <button type="button" id="btn-cancelar"  name="button">${obj.botonCancelarText}</button>`
    }



    if (obj.botonAceptarText=="" && obj.botonCancelarText=="") {
      contentFooter="";
    }

    let footer=`<div class="footer">
        ${contentFooter}
    </div>`;

    if(obj.input){

      this.body.insertAdjacentHTML('afterbegin',`
    <div id="backModalIns" class="modalInsBack">
      <div id="modal">
        <div class="header">
            ${obj.titulo}
        </div>

        <div class="content" style="display:grid">
          <div class="mensajeCarga">${obj.contenido}</div>
        ${input}
        </div>
        ${footer}
      </div>
    </div>
      `)

    }else {

      this.body.insertAdjacentHTML('afterbegin',`
    <div id="backModalIns" class="  modalInsBack">
      <div id="modal">
        <div class="header">
            ${obj.titulo}
        </div>

        <div class="content" style="display:flex">

        <svg class="loading" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring" style="background: none;"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#facd9e" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(300 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>
          <div class="mensajeCarga">${obj.contenido}</div>
        </div>
        ${footer}
      </div>
    </div>

      `




    )
  };




       return new Promise((resolver,rechazar)=>{
         let aceptar = document.getElementById("btn-aceptar").addEventListener("click",function(){
           document.getElementsByTagName("body")[0].classList.remove("back")
           let response="";

           if (document.getElementsByClassName("input-modal")[0] === undefined) {
             response= "aceptado";
           }else {
             response = document.getElementsByClassName("input-modal")[0].value;
           }


           document.getElementById("modal").style.animationName='closeModal'


            setTimeout(()=>
          {
            document.getElementById("modal").remove()
            document.getElementById("backModalIns").classList.remove("modalInsBack")
            resolver(response)
          },500);


         });

         let cancelar = document.getElementById("btn-cancelar").addEventListener("click",function(){
           let modal = document.getElementById("modal")
           document.getElementsByTagName("body")[0].classList.remove("back")

           modal.style.animationName='closeModal'
           console.log("ss");

            setTimeout(()=>
          {
            document.getElementById("backModalIns").classList.remove("modalInsBack")
            modal.remove()
            resolver("cancelar")
          },500)


         });

       });

  };

  cerrar(){

    document.getElementById("modal").style.animationName='closeModal'
    document.getElementsByTagName("body")[0].classList.remove("back")



    setTimeout(()=>
  {
    document.getElementById("backModalIns").classList.remove("modalInsBack")
      document.getElementById("modal").remove()

  },500)
};

}
