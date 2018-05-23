## Modalins

- modalisn es una pequeña libreria de alertas, con un diseño inspirado en material design, facil de intergrar en tu proyecto.


#### instalacion

incluiye el archivo css en el heade de el html.



````

<link rel="stylesheet" href="./modalins.css">


````
tambien incluye el js al final del body

````
<script src="./modalins.js" charset="utf-8"></script>

````


#### utilizacion

instancia el modal

````
let modalins = new Modalins();
````
crealo

`````
modalins.create({
    title:'En Transaccion',
    content:'Esta seguro que desea continuar'

  }).then(function(result){
    console.log(result);

  })

  `````

  y cerrarlo

  ````
  Modalins.close();
  ````

  ### configuracion

  - title : dale un texto al titulo del modal
  - content : escribe un texto que se mostrara de manera central en el modal

    al content se le puede pasar un id  para mostrar el contenido de la etiqueta  :

    ````
    <p id="idContenido" style="display:none"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>


    ````


    ````
    modalins.create({
        title:'En Transaccion',
        content:'#idContenido'

      }).then(function(result){
        console.log(result);

      })


    ````

<a href="https://imgbb.com/"><img src="https://image.ibb.co/kF70rJ/Screen_Shot_2018_05_09_at_10_27_58_PM.png" alt="Screen_Shot_2018_05_09_at_10_27_58_PM" border="0"></a>



  - confirmText: texto que tendra el boton principal o de aceptar
  - cancelText : texto que tendra el boton secundario o el de cancelar
  - style : combinacion de colores que puedes modificar, existen 4 , el 'normal' que viene por defecto,'blue',   'orange','red'
  - loading: true para que aparezca una imagen de carga, false para que no aparezca
  - type:por defecto vacio, al colorcar 'input' el modal traera un input para ingresar un numero o texto
  - typeInput: por defecto vacio y recibira un texto , si se coloca 'number', solo recibira caracteres numericos.
  - hideButtons: oculta los botones.

### retorno de datos
este modal devolvera una promesa con los datos ingresados en el input o la palabra aceptar o cancelar segun el boton que se presiono.


### capturas

##### estilo por defecto

<a href="https://ibb.co/mF6ouS"><img src="https://preview.ibb.co/msxuZS/Screen_Shot_2018_05_09_at_2_07_01_AM.png" alt="Screen_Shot_2018_05_09_at_2_07_01_AM" border="0"></a>

##### estilo:'blue'

<a href="https://ibb.co/hbP2M7"><img src="https://preview.ibb.co/fw5WES/Screen_Shot_2018_05_09_at_2_07_22_AM.png" alt="Screen_Shot_2018_05_09_at_2_07_22_AM" border="0"></a>

##### estilo:'orange'

<a href="https://ibb.co/kMwGg7"><img src="https://preview.ibb.co/dmgSon/Screen_Shot_2018_05_09_at_2_07_37_AM.png" alt="Screen_Shot_2018_05_09_at_2_07_37_AM" border="0"></a>

##### estilo:'red'

<a href="https://ibb.co/ckj2M7"><img src="https://preview.ibb.co/nesBES/Screen_Shot_2018_05_09_at_2_07_48_AM.png" alt="Screen_Shot_2018_05_09_at_2_07_48_AM" border="0"></a>

##### tipo:'input'

<a href="https://ibb.co/heynM7"><img src="https://preview.ibb.co/iBYMg7/Screen_Shot_2018_05_09_at_2_15_33_AM.png" alt="Screen_Shot_2018_05_09_at_2_15_33_AM" border="0"></a>


###### desarrollado por deinspiracion
email: alejandro.onate.c@gmail.com
