## Modalins

- modalisn es una pequeña libreria de alertas, con un diseño inspirado en material design, facil de intergrar en tu proyecto.


#### instalacion

incluiye el archivo css en el heade de el html

````

<link rel="stylesheet" href="./modalins.css">


````
tambien incluye el js al final del body

````
<script src="./modalins.js" charset="utf-8"></script>

````
y la fuente en el mismo nivel que el css, esta fuente permitira darle un toque distinto al modal.


#### utilizacion

instancia el modal

````
let modalins = new Modalins();
````
crealo

`````
modalins.crear({
    title:'En Transaccion',
    content:'Esta seguro que desea continuar',
    confirmText:'Aceptar',
    cancelText:'Cancelar',
    style:"blue",
    loading:true,
    type:'',
    typeInput:"number"

  }).then(function(result){
    console.log(result);

  })

  `````

  y cerrarlo

  ````
  Modalinsp.cerrar();
  ````

  ### configuracion

  -  title : dale un texto al titulo del modal
  - content : escribe un texto que se mostrara de manera central en el modal
  - confirmText: texto que tendra el boton principal o de aceptar
  - cancelText : texto que tendra el boton secundario o el de cancelar
  - style : convinacion de colores que puedes modificar, existen 4 , el 'normal' que viene por defecto,'blue' parecido al normal, 'orange','red'
  - loanding: true para que aparezca una imagen de carga, false para que no aparezca
  - type:por defecto vacio, al colorcar 'input' el modal traera un input para ingresar un numero o texto
  - typeInput: por defecto vacio y recibira un texto , si se coloca 'number', solo recibira caracteres numericos.


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
