import '../css/style.css'

const randomDataElement = document.querySelector('#randomData');

async function getRandomDataFromApi() {
  const response =  await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const data =  await response.json()

  randomDataElement.textContent = data.text
}

const printData = () => {document.querySelector('#app').innerHTML = `
  <div>
    <h1>FemFacts</h1>
    <div class="card">
      <button id="counter" type="button">QUE SE VEA EL BOTON</button>
    </div>
    <section id="randomData">
    
    </section>
    
  </div>
`
}
getRandomDataFromApi()
