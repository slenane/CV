const english = document.querySelector(".lang-eng");
const spanish = document.querySelector(".lang-esp");
const portuguese = document.querySelector(".lang-por");

let header1 = document.querySelector(".header_1");

const updateLanguage = (lang) => {
  console.log(lang);
  
  if (lang === "eng") {
    header1.textContent = "Technical Experience";
  } else if (lang === "esp") {
    header1.textContent = "Experiencia Técnica";
  } else if (lang === "por") {
    header1.textContent = "Experiência Técnica";
  }
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
