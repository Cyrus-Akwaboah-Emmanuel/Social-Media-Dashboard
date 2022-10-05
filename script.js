let body = document.body;
let toggleBtn = document.querySelector("#darkmode-svg");
let currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
  body.classList.add("darkMode");
}
toggleBtn.addEventListener("click", ()=>{
  body.classList.toggle("darkMode");

  if(body.classList.contains("darkMode")){
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme", "themeActive");
  }
})