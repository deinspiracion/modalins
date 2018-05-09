
class Modalins {
  constructor() {let body;};



crear(obj){
    let estilo = obj.estilo || 'normal';
    let loading=""
    if (obj.loading) {
       loading =`  <svg width="100px"  height="100px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#499255" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(204 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>`};

    this.body = document.getElementsByTagName("body")[0];

    let contentFooter="";
    let input =`<input class="input-modalins" type="${obj.tipoInput || "text"}" name="" value="">`;

    if ((obj.botonAceptarText!== undefined )) {
    contentFooter +=` <button type="button" id="modalinsBtnAceptar" class="${estilo}" name="button">${obj.botonAceptarText}</button>`

    }

    if ((obj.botonCancelarText!== undefined ) ) {
        contentFooter +=` <button type="button" id="modalinsBtnCancelar" class="${estilo}" name="button">${obj.botonCancelarText}</button>`
    }

    if (obj.botonAceptarText== undefined && obj.botonCancelarText== undefined) {
        contentFooter +=` <button type="button"  class="${estilo}" id="modalinsBtnAceptar" name="button">Aceptar</button>
                          <button type="button" id="modalinsBtnCancelar" name="button" class="${estilo}">Cancelar</button>`
    }




    let footer=`<div class="footerMat">
        ${contentFooter}
    </div>`;

    if(obj.tipo=='input'){

      this.body.insertAdjacentHTML('afterbegin',`
      <div  id="backModalIns" class="modalInsBack"></div>
      <div id="modalins">
      <div class="headerMat">
          <div class="lineaSuperior ${estilo}"></div>
          <div class="lineaInferior ${estilo}_1">
            <div class="titulo">${obj.titulo}</div>
          </div>
        </div>
        <div class="contenidoMat" style="display:grid">
          <div class="contentText">${obj.contenido}</div>
          <div>${input}</div>
        </div>
          ${footer}
          </div>
          </div>`);
        }else {
          this.body.insertAdjacentHTML('afterbegin',`
            <div  id="backModalIns" class="modalInsBack"></div>
            <div id="modalins">
              <div class="headerMat">
                <div class="${estilo} lineaSuperior "></div>
                <div class="${estilo}_1 lineaInferior ">
                  <div class="titulo">${obj.titulo}</div>
                </div>
              </div>
              <div class="contenidoMat">
                  <div class="load">${loading}</div>
                  <div class="contentText">${obj.contenido}</div>
              </div>
              ${footer}
              </div>
              </div>`);
            };

    document.getElementById("backModalIns").addEventListener("click",function(){cerrar()})

    return new Promise((resolver,rechazar)=>{

          if (obj.botonCancelarText !== undefined) {
            document.getElementById("modalinsBtnCancelar").addEventListener("click",function(event){
               cerrar().then(()=>{
                 resolver("cancelar")
               });
             }) ;
          }
          if (obj.botonAceptarText!== undefined) {
            document.getElementById("modalinsBtnAceptar").addEventListener("click",function(event){
               let response="";
               if (document.getElementsByClassName("input-modalins")[0] === undefined) {
                 response= "aceptado";
               }else {
                 response = document.getElementsByClassName("input-modalins")[0].value;
               }
               cerrar().then(()=>{
                   resolver("aceptar")
                 });
               }) ;

          }



       });

  };



}


async function cerrar(){

 document.getElementById("modalins").style.animationName='closeModal'
 document.getElementById("backModalIns").style.animationName='closeModalBack'
 setTimeout(()=>
  {
   document.getElementById("backModalIns").classList.remove("modalInsBack")
   document.getElementById("modalins").remove()


  },500)

}
