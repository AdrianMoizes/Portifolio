const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-toggle i");
const menuDrop = document.querySelector(".menu-drop");
const menu_switch = document.querySelector(".theme_change i");
const corpo = document.querySelector("body");
const main = document.querySelector("main");

// Inicialmente oculta o menu
menuDrop.classList.toggle("active");

// Função para alternar o tema
theme_change = () => {
  menu_switch.classList.toggle("theme_black");
  const theme_black_on = menu_switch.classList.contains("theme_black");
  menu_switch.classList.toggle("fa-sun-o", theme_black_on);
  menu_switch.classList.toggle("fa-moon-o", !theme_black_on);
  corpo.classList.toggle("theme_black", theme_black_on);
  return theme_black_on;
}

// Função para alternar a abertura do menu
menuToggle.onclick = () => {
  menuDrop.classList.toggle("active");
  const isOpen = menuDrop.classList.contains("active");
  menuIcon.classList = isOpen ? "fa fa-bars" : "fa fa-close";
  return menuToggle()
}

function title_sobremin_link () {
  menuToggle.onclick()
}

function title_projetos_link () {
  menuToggle.onclick()
}


function title_skills_link () {
  menuToggle.onclick()
}
