const navElement = document.getElementById("nav-el");

navElement.onmouseover = () => {mouseOver()};
navElement.onmouseout = () => {mouseOut()};

const mouseOver = () => {
  navElement.style.color = "red";
}

const mouseOut = () => {
  navElement.style.color = "white";
}