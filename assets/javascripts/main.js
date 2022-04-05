const english = document.querySelector(".lang-eng");
const spanish = document.querySelector(".lang-esp");
const portuguese = document.querySelector(".lang-por");

let headers = document.querySelectorAll(".header");

const updateLanguage = (lang) => {
  console.log(lang);
  
  fetch("/translation.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));

};

english.addEventListener("click", () => {
  updateLanguage("eng")
});
spanish.addEventListener("click", () => {
  updateLanguage("esp")
});
portuguese.addEventListener("click", () => {
  updateLanguage("por")
});
