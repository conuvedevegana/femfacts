import '../css/style.css'

const randomDataElement = document.querySelector('#app');
const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"


async function getRandomDataFromApi() {
  const response =  await fetch(api_url);
  const data =  await response.json()

  randomDataElement.innerHTML = `
  <div class="main__container">
  <div class="main__container main__container-desktop">

    <h1>GET A RANDOM FACT</h1>
    <div class="main__container-line">
      <img src="./src/assets/icons/decoration.svg" alt="decoration main page">
    </div>
    <section class="main__container-section">

      <div class="book__container">
        <div>${data.text}</div>
      </div>

    </section>
    <div class="btn__container">
      <button id="btn-fact" class="btn__primary"><img src="./src/assets/icons/next-icon.svg" alt="go to another fact">Get another fact</button>
      <button type="button" class="btn__second" id="liveToastBtn"><img src="./src/assets/icons/favourite-icon.svg" alt="add to favourite">Add to favourites</button>
    </div>
    <div class="links">
      <a href="#">Take me to my favourites</a>
    </div>
  </div>

  </div>
  `
}

// const printData = () => {document.querySelector('#app').innerHTML = `
//   <div>
    
//     <section id="randomData">
    
//     </section>
    
//   </div>
// `
// }


getRandomDataFromApi()
