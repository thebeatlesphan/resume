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
const projectSection = document.getElementsByClassName("display");
const projects = projectSection[0].children;

function onHover(number) {
  const projectBackground = projects[number];
  const projectImg = projects[number].children[0];
  const projectContent = projects[number].children[1];

  projectBackground.style.backgroundColor = "white";
  projectImg.style.display = "none";
  projectContent.style.opacity = "1";
}

function offHover(number) {
  const projectBackground = projects[number];
  const originalBackgroundColor = projectBackground.getAttribute(
    "data-original-background-color"
  );
  const projectImg = projects[number].children[0];
  const projectContent = projects[number].children[1];
  projectBackground.style.backgroundColor = originalBackgroundColor;
  
  projectImg.style.display = "block";
  projectContent.style.opacity = "0";
  projectBackground.style.background = "original color";
}
