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

      <div id="message-content"></div>
      <section class="main__container-section">

        <div id="cont-fact" class="book__container">
          <div >${data.text}</div>
        </div>

      </section>
      <div class="btn__container">
        <button id="btn-fact" class="btn__primary"><img src="./src/assets/icons/next-icon.svg" alt="go to another fact">Get another fact</button>
        <button id="btn-favourites" type="button" class="btn__second"><img src="./src/assets/icons/favourite-icon.svg" alt="add to favourite">Add to favourites</button>
        
      </div>
      <div class="links">
        <a href="#">Take me to my favourites</a>
      </div>
      <div id="favouritesBox"></div>
    </div>

    </div>
    `;
    
    document.getElementById('btn-fact').addEventListener('click', get_data);
    document.getElementById('btn-favourites').addEventListener('click',add_to_favourites);
  
  }else{
    return "error";
  }
} 

get_data()

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function (data) {
// Obtén el contenido del div por su id
  const textFact = data.text;
// Guarda el contenido en una constante para usarlo en otra función
  const idFact = data.id;
});

const add_to_favourites = (idFact,textFact) => {
try {
// Obtenemos la lista de favoritos del localStorage.
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  favourites.push({ id:idFact, text:textFact });
  // Actualizamos la lista de favoritos en el localStorage.
  localStorage.setItem("favourites", JSON.stringify(favourites));
  // Devolvemos el elemento agregado (opcional, puedes devolver lo que necesites).
  //return { id: idFact, text: textFact };
  console.log("List favourites:", JSON.parse(localStorage.getItem("favourites")));

    showMessage();
    return true;
  } catch (error) {
    showMessageError();
    return false;
  }
}

function showMessage() {
  const messageContent = document.getElementById('message-content');
  // Mostrar mensaje
  messageContent.innerHTML = 'You have been added to the favorites list!';
  messageContent.style.display = 'block';
  messageContent.style.cssText = "font-weight: bolder; font-size: 1.5em; color: red";

  // Ocultar mensaje después de 2 segundos
  setTimeout(function() {
    messageContent.style.display = 'none';
  },2000);
}

function showMessageError() {
  const messageContent = document.getElementById('message-content');
  // Mostrar mensaje
  messageContent.innerHTML = 'Error adding item. Please try again!';
  messageContent.style.display = 'block';
  messageContent.style.cssText = "font-weight: bolder; font-size: 1.5em; color: red";

  // Ocultar mensaje después de 2 segundos
  setTimeout(function() {
    messageContent.style.display = 'none';
  },2000);
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
