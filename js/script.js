// kasi Toggle class active
let navbarNav = document.querySelector (".navbar-nav");

// ketika display-menu di klik
document.querySelector ("#display-menu") .onclick = () => {
  navbarNav.classList.toggle ("active");
};

// apabila klik di luar sidebar maka navbar akan hilang
let display = document.querySelector ("#display-menu");

// ketika mouse klik di luar side bar
// ketika di klik di halaman kemudian jalankan function event
document.addEventListener ("click", function(clickonsite) {
  if (!display.contains (clickonsite.target) && !navbarNav.contains (clickonsite.target)) {
    navbarNav.classList.remove ("active");
  }
});