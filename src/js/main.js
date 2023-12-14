import '../css/style.css'

const randomDataElement = document.querySelector('#app');
const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"


async function getRandomDataFromApi() {
  const response =  await fetch(api_url);
  const data =  await response.json()

  randomDataElement.innerHTML = data.text
}

// const printData = () => {document.querySelector('#app').innerHTML = `
//   <div>
    
//     <section id="randomData">
    
//     </section>
    
//   </div>
// `
// }
getRandomDataFromApi()
