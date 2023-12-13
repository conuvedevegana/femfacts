import '../css/style.css'


async function logMovies() {
  const response =  await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const movies =  await response.json()
    console.log(movies.text);
    
    return movies.text
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>FemFacts</h1>
    <div class="card">
      <button id="counter" type="button">QUE SE VEA EL BOTON</button>
    </div>
    <section id="ACA">
    
    </section>
    
  </div>
`

logMovies(document.querySelector('#ACA'))
