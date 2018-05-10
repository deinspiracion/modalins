
class Modalins {
  constructor() {};



create(obj){
    let style = obj.style || 'normal';
    let loading=""
    let content=obj.content
    if(content[0]=="#"){
      content = content.replace("#","")
      console.log(content);
      obj.content = document.getElementById(content).innerHTML

    }
    if (obj.loading) {
       loading =`  <svg width="100px"  height="100px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#499255" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(204 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>`};

    const body = document.getElementsByTagName("body")[0];

    let contentFooter="";
    let input =`<input class="input-modalins" type="${obj.typeInput || "text"}" name="" value="">`;

    if ((obj.confirmText!== undefined )) {
    contentFooter +=` <button type="button" id="modalinsBtnAceptar" class="${style}" name="button">${obj.confirmText}</button>`

    }

    if ((obj.CancelalText!== undefined ) ) {
        contentFooter +=` <button type="button" id="modalinsBtnCancelar" class="${style}" name="button">${obj.CancelalText}</button>`
    }

    if ((obj.confirmText== undefined && obj.CancelalText== undefined) && obj.hideButtons != true) {
        contentFooter +=` <button type="button"  class="${style}" id="modalinsBtnAceptar" name="button">Aceptar</button>
                          <button type="button" id="modalinsBtnCancelar" name="button" class="${style}">Cancelar</button>`
    }




    let footer=`<div class="footerMat">
        ${contentFooter}
    </div>`;

    if(obj.type=='input' || obj.type !== undefined){

      body.insertAdjacentHTML('afterbegin',`
      <div  id="backModalIns" class="modalInsBack"></div>
      <div id="modalins">
      <div class="headerMat">
          <div class="lineaSuperior ${style}"></div>
          <div class="lineaInferior ${style}_1">
            <div class="title">${obj.title}</div>
          </div>
        </div>
        <div class="contentMat" style="display:grid">
          <div class="contentText">${obj.content}</div>
          <div>${input}</div>
        </div>
          ${footer}
          </div>
          </div>`);
        }else {
          body.insertAdjacentHTML('afterbegin',`
            <div  id="backModalIns" class="modalInsBack"></div>
            <div id="modalins">
              <div class="headerMat">
                <div class="${style} lineaSuperior "></div>
                <div class="${style}_1 lineaInferior ">
                  <div class="title">${obj.title}</div>
                </div>
              </div>
              <div class="contentMat">
                  <div class="load">${loading}</div>
                  <div class="contentText">${obj.content}</div>
              </div>
              ${footer}
              </div>
              </div>`);
            };

    document.getElementById("backModalIns").addEventListener("click",function(){close()})

    return new Promise((resolver,rechazar)=>{

          if (obj.hideButtons  != true || obj.hideButtons == undefined) {
            document.getElementById("modalinsBtnCancelar").addEventListener("click",function(event){
               close().then(()=>{
                 resolver("cancelar")
               });
             }) ;
          }
          if (obj.hideButtons != true || obj.hideButtons == undefined) {
            document.getElementById("modalinsBtnAceptar").addEventListener("click",function(event){
               let response="";
               if (document.getElementsByClassName("input-modalins")[0] === undefined) {
                 response= "aceptado";
               }else {
                 response = document.getElementsByClassName("input-modalins")[0].value;
               }
               close().then(()=>{
                   resolver(response)
                 });
               }) ;

          }



       });

  };



}


async function close(){

 document.getElementById("modalins").style.animationName='closeModal'
 document.getElementById("backModalIns").style.animationName='closeModalBack'
 setTimeout(()=>
  {
   document.getElementById("backModalIns").classList.remove("modalInsBack")
   document.getElementById("modalins").remove()


  },500)

}
