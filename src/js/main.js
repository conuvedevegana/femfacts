import '../css/style.css'


// function mostrarApi(api) {

//   const aparezcaApi = document.getElementById('ACA')
  
//   const {strApi} = apiRest;
//   const section = document.createElement('DIV');
//   section.value = strApi;
//   section.textContent = strApi;
  
//   aparezcaApi.appendChild(section)
  
// }

async function logMovies() {
  const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const movies = await response.json();
   console.log(movies.text);
   return movies.text
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <section id="ACA">
    
    </section>
    
  </div>
`

logMovies(document.querySelector('#ACA'))
