// //navigation menu
// function openNav() {
//     document.getElementById("overlay").style.height = "100%";
// }

// function closeNav() {
//     document.getElementById("overlay").style.height = "0%";
// }

// //modal for projects
// const modal = document.getElementsByClassName("modals")

function changeTheme() {
  const theme = document.querySelector("*");
  const background = document.querySelector(".stars")
  const smiley = document.querySelector(".smiley")
  console.log(background)
  theme.classList.toggle("dark");
  background.classList.toggle("dark")
  smiley.classList.toggle("dark")
  console.log("theme");
}
