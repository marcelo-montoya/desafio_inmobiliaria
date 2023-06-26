const propsJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170,
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130,
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80,
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6,
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200,
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500,
    },
    {
      name: "Cabaña en el lago",
      description: "Cabaña en muy muy lejano",
      src: 
        "https://st2.depositphotos.com/2716431/5398/i/950/depositphotos_53980341-stock-photo-cottage-by-the-lake-in.jpg",
      rooms: 3,
      m: 70,
    },
    {
      name: "Piso en Barcelona",
      description: "Piso frente a la Sagrada Familia",
      src: 
        "https://www.metropoliabierta.com/uploads/s1/16/90/95/8/sagrada-familia-edificio-lujo.jpeg",
      rooms: 4,
      m: 170,
    },
    {
      name: "Casa de campo",
      description: "En el sur de Chile",
      src: 
        "https://i.ytimg.com/vi/LxZqUYNg2W4/maxresdefault.jpg",
      rooms: 5,
      m: 300,
    },
    {
      name: "Motorhome",
      description: "Amplia y acogedora",
      src: 
        "https://www.knaus.com/fileadmin/_processed_/1/d/csm_ktg-knaus-2020-2021-livei-highlights-exterieur_b4bd2ebf13.jpg",
      rooms: 2,
      m: 12,
    },
  ];

/* Variables globales */ 

let propiedades = document.querySelector('.propiedades');
let spanTotal = document.getElementById('span-total');
let html = '';

/* Bloque que inicializa la página */

for(let prop of propsJSON) {
  propiedades.innerHTML += `
  <div class="propiedad">
    <img class="imagen" src="${prop.src}" alt="">
    <section>
        <h5>${prop.name}</h5>
        <div>
          <p>Cuartos: ${prop.rooms}</p>
          <p>Metros: ${prop.m}</p>
        </div>
        <p class="my-3">${prop.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
  </div>
    `
}

/* Bloque que provoca el evento */
let buttonFilter = document.getElementById('button-filter');
buttonFilter.addEventListener('click', () =>{
  
  /* Captura de datos deslos inputs */
  let inputRooms = document.getElementById('input-rooms').value;
  let inputMin = document.getElementById('input-min').value;
  let inputMax = document.getElementById('input-max').value;
  
  if( inputRooms == '' || inputMin == '' || inputMax == ''){
    alert('Ingresa cuartos y metros cuadrados')
    return
  }
  
  /* Este filtro regresa un nuevo arrelo */
  propiedades.innerHTML = html;
  let newPropsJSON = propsJSON.filter(x => x.m >= inputMin && x.m <= inputMax && x.rooms <= inputRooms).sort((a, b) => a.m - b.m);
  
  /* ForEach renderiza ese nuevo arreglo */
  newPropsJSON.forEach(k => {
    propiedades.innerHTML += 
    `
    <div class="propiedad">
      <img class="imagen" src="${k.src}" alt="">
      <section>
        <h5>${k.name}</h5>
        <div>
          <p>Cuartos: ${k.rooms}</p>
          <p>Metros: ${k.m}</p>
        </div>
        <p class="my-3">${k.description}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
      `
    spanTotal.innerHTML = newPropsJSON.length;
  });
          
})