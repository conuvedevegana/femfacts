import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap'


const randomDataElement = document.querySelector('#app');
const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const favouritesList = [];


document.addEventListener('DOMContentLoaded', () =>{

  //Get API

  const get_data = async () => {
    await fetch(api_url)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => print_api(data))
      .catch (err => {
        let msg = err.statusText || "unexpected error"

        document.getElementById('app').innerHTML = 
        `
          <div class="error">
              <p> Error ${err.status}: ${msg}</p>
          </div>
        `
    })
  }  
  
// document.querySelector('.main__container-desktop').getElementsByClassName.display = "none";


  // print response-data-API
  const print_api = (data) => {
    if( data !== null){
      randomDataElement.innerHTML = 
      `
      <div class="main__container">
          <div id="toast-container" class="toast col align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex flex-row fs-6">
              <div class="toast-body"></div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>  
          </div>
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
          
          <div class="links" id="link-fav">
            <a href="#">Take me to my favourites</a>
          </div>
        </div>

      </div>
    `;
    
    document.getElementById('btn-fact').addEventListener('click',get_data)
    document.getElementById('btn-favourites').addEventListener('click',() => add_to_favourites(data))
    document.getElementById('link-fav').addEventListener('click', take_to_my_favourites)
  }else{
    return "error";
  }

} 

get_data()

const add_to_favourites= (data)=> {
  const isFavourite = favouritesList.some((fav) => fav.id === data.id);

  if (!isFavourite) {
    favouritesList.push(data);
    console.log('Favorito agregado:', data);
    showToast('Added to Favourites')
    

  } else{
    return showToast('This fact is already in Favourites');
  }

}



const hide_default_view = () => {
    const mainContainerSection = document.querySelector('.main__container-section');
    const btnContainer = document.querySelector('.btn__container');
    
    mainContainerSection.classList.toggle("d-none");
    btnContainer.classList.toggle("d-none");
};

const changeH1 = () => {
  const heading1 = document.querySelector('h1');
  heading1.innerHTML = "FAVOURITES";
} 

const take_to_my_favourites = () => {
  hide_default_view();
  print_favourites();
  changeH1();
};


const print_favourites = () => {
  
  const favouritesContainer = document.querySelector('.links');
    if(favouritesContainer){
      console.log(favouritesContainer);
      // favouritesContainer.innerHTML = ''

      favouritesList.forEach((favourite) => {
        console.log(favouritesList);

        const favouriteElement = document.createElement('div');
        favouriteElement.classList.add('main__container')
        favouriteElement.textContent = `${favourite.text}`;

        favouritesContainer.appendChild(favouriteElement);
      });
    }
};

function showToast(message) {
  const toastContainer = document.getElementById('toast-container');

  if (toastContainer) {
    const toast = new bootstrap.Toast(toastContainer);

    const toastBody = toastContainer.querySelector('.toast-body');

    if (toastBody) {
      toastBody.textContent = message;
      toast.show();
    } else {
      console.error('Element with class .toast-body not found inside #toast-container');
    }
  } else {
    console.error('Element with id #toast-container not found');
  }
}
})
