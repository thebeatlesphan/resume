//color scheme
function changeTheme() {
  const theme = document.querySelector("*");
  const background = document.querySelector(".stars");
  const smiley = document.querySelector(".smiley");

  theme.classList.toggle("dark");
  background.classList.toggle("dark");
  smiley.classList.toggle("dark");
}

//mouseover projects
const display = document.getElementsByClassName("display");
const projects = display[0].children;

function onHover(number) {
  const snippet = projects[number].children[0]
  const toProject = projects[number].children[1].children[2]
  
  toProject.style.textDecoration = "underline"
  snippet.style.transform = "scale(1.03)"
}

function offHover(number) {
  const snippet = projects[number].children[0]
  const toProject = projects[number].children[1].children[2]
  
  toProject.style.textDecoration = "none"
  snippet.style.transform = "scale(1)"
}

//modal
const modalParent = document.getElementsByClassName("modal")
const modal = modalParent[0].children
console.log(modalParent[0])

function showModal(number) {
  modalParent[0].style.display = "flex"
  modal[number].style.display = "block";
  console.log("hiii")
}

window.onclick = function(e) {
  if (e.target == modalParent[0]) {
    modalParent[0].style.display = "none"
  } 
}