import '../css/style.css'

const randomDataElement = document.querySelector('#app');
const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"

// Obtener API
const get_data = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
      return print_api(data);
  } catch (error) {
    throw error
  }
}  

// Imprimir respuesta
const print_api = (data) => {
  if( data !== null){
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
        <button id="btn-favourites" type="button" class="btn__second"><img src="./src/assets/icons/favourite-icon.svg" alt="add to favourite">Add to favourites</button>
      </div>
      <div class="links">
        <a href="#">Take me to my favourites</a>
      </div>
    </div>

    </div>
    `;
    
    document.getElementById('btn-fact').addEventListener('click',get_data )
    document.getElementById('btn-favourites').addEventListener('click',add_to_favourites)
  }else{
    return "error";
  }

} 

get_data()


const add_to_favourites= (data)=> {
 // const favourites = 
  console.log('hice ckieck favoritos')
}










// async function getRandomDataFromApi() {

//   const response =  await fetch(api_url);
//   const data =  await response.json()

//   randomDataElement.innerHTML = `
//   <div class="main__container">
//   <div class="main__container-desktop">

//     <h1>GET A RANDOM FACT</h1>
//     <div class="main__container-line">
//       <img src="./src/assets/icons/decoration.svg" alt="decoration main page">
//     </div>
//     <section class="main__container-section">

//       <div class="book__container">
//         <div>${data.text}</div>
//       </div>

//     </section>
//     <div class="btn__container">
//       <button id="btn-fact" class="btn__primary"><img src="./src/assets/icons/next-icon.svg" alt="go to another fact">Get another fact</button>
//       <button type="button" class="btn__second" id="liveToastBtn"><img src="./src/assets/icons/favourite-icon.svg" alt="add to favourite">Add to favourites</button>
//     </div>
//     <div class="links">
//       <a href="#">Take me to my favourites</a>
//     </div>
//   </div>

//   </div>
//   `
//   document.getElementById("btn-fact").addEventListener('click', getRandomDataFromApi);
// }

// const printData = () => {document.querySelector('#app').innerHTML = `
//   <div>
    
//     <section id="randomData">
    
//     </section>
    
//   </div>
// `
// }

//getRandomDataFromApi()
