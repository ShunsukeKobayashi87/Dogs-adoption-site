const selectElement = (selector) => {
  let element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `something went wrong, make sure ${selector} exists or typed correctly`
  );
};
//toggle activated class
const toggleMenu = () => {
  const menuToggleButton = selectElement(".menu-toggle-icon");
  const menu = selectElement(".menu");
  menuToggleButton.addEventListener("click", () => {
    menu.classList.toggle("activated");
    menuToggleButton.classList.toggle("activated");
    console.log(menu.classList);
  });
};
toggleMenu();

//swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    //nextEl   l ha komoji oomojinisitaseide dousasinakatta
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const seeDogList = () => {
  const seeDogBtn = selectElement(".see-dogs-btn");
  const form = selectElement(".breed-selector");
  let breedName = selectElement(".breed-name");
  let gridImages = document.querySelectorAll(".search-dogs .dog-slide");
  let breed;
  seeDogBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(form.value);
    breed = form.value.split("-");
    gridImages.forEach(item =>{
      let url;
      if(breed.length ===1){
        url = `https://dog.ceo/api/breed/${breed[0]}/images/random`;
      }else if(breed.length===2){
        url = `https://dog.ceo/api/breed/${breed[0]}/${breed[1]}/images/random`;
      }

      fetch(url).then(response=>response.json()).then(data=>{
        item.firstElementChild.src= data.message;
        item.lastElementChild.lastElementChild.firstElementChild.textContent = breed;
      });
    })
  });
};
seeDogList();
