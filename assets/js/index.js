const propiedadesJSON = [
  {
    name: 'Casa de campo',
    description: 'Un lugar ideal para descansar de la ciudad',
    src:
      'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    rooms: 2,
    m: 170
  },
  {
    name: 'Casa de playa',
    description: 'Despierta tus días oyendo el oceano',
    src:
      'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
    rooms: 2,
    m: 130
  },
  {
    name: 'Casa en el centro',
    description: 'Ten cerca de ti todo lo que necesitas',
    src:
      'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    rooms: 1,
    m: 80
  },
  {
    name: 'Casa rodante',
    description: 'Conviertete en un nómada del mundo sin salir de tu casa',
    src:
      'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    rooms: 1,
    m: 6
  },
  {
    name: 'Departamento',
    description: 'Desde las alturas todo se ve mejor',
    src:
      'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',

    rooms: 3,
    m: 200
  },
  {
    name: 'Mansión',
    description: 'Vive una vida lujosa en la mansión de tus sueños ',
    src:
      'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    // src:
    //   "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
]

const btnBuscar = document.getElementById('btn-buscar')
const cantidadDeCuartos = document.getElementById('cant-cuartos')
const cantMetrosDesde = document.getElementById('metros-desde')
const cantMetrosHasta = document.getElementById('metros-hasta')

const propiedadesSection = document.querySelector('.propiedades')

// propiedadesSection.innerHTML = `
// <div class="propiedad">
//   <div class="img"
//     style="background-image: url(${propiedadesJSON[0]["src"]})">
//   </div>
//   <section>
//     <h5>${propiedadesJSON[0]["name"]}</h5>
//     <div class="d-flex justify-content-between">
//       <p>Cuartos: ${propiedadesJSON[0]["rooms"]}</p>
//       <p>Metros: ${propiedadesJSON[0]["m"]}</p>
//     </div>
//     <p class="my-3">${propiedadesJSON[0]["description"]}</p>
//     <button class="btn btn-info ">Ver más</button>
//   </section>
// </div>`

let template = ''
for (const ventas of propiedadesJSON) {
  template = `
  <div class="propiedad">
    <div class="img"
      style="background-image: url(${ventas.src})">
    </div>
    <section>
      <h5>${ventas.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${ventas.rooms}</p>
        <p>Metros: ${ventas.m}</p>
      </div>
      <p class="my-3">${ventas.description}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`
  propiedadesSection.innerHTML += template
}

btnBuscar.addEventListener('click', () => {
  if (cantidadDeCuartos.value && cantMetrosDesde.value && cantMetrosHasta.value) {
    // alert(`cantidad de cuartos ${cantidadDeCuartos.value}`)
    // alert(`metros desde ${cantMetrosDesde.value}`)
    // alert(`metros hasta ${cantMetrosHasta.value}`)

    template = ''
    for (const ventas of propiedadesJSON) {
      template = `
      <div class="propiedad">
        <div class="img"
          style="background-image: url(${ventas.src})">
        </div>
        <section>
          <h5>${ventas.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${ventas.rooms}</p>
            <p>Metros: ${ventas.m}</p>
          </div>
          <p class="my-3">${ventas.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>`
      propiedadesSection.innerHTML += templatenull
    }
  } else {
    if (cantidadDeCuartos.value.length === 0) {
      alert('cantidad de cuartos VACIO')
    } else if (cantMetrosDesde.value.length === 0) {
      alert('cantidad de metros desde VACIO')
    } else if (cantMetrosHasta.value.length === 0) {
      alert('cantidad de metros hasta VACIO')
    } else {
      alert('Error no considerado')
    }
  }
})
