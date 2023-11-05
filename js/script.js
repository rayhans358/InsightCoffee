// kasi Toggle class active display-menu
let navbarNav = document.querySelector (".navbar-nav");

// ketika display-menu di klik
document.querySelector ("#display-menu").onclick = () => {
  navbarNav.classList.toggle ("active");
};

// kasi Toggle class active search-button
let searchForm = document.querySelector (".search-form");
let searchBox = document.querySelector ("#search-box");

// ketika search-form di klik
document.querySelector ("#search-button").onclick = (event) => {
  searchForm.classList.toggle ("active");
  searchBox.focus();
  event.preventDefault();
};

// kasi Toggle class active shopping-cart
let shoppingCart = document.querySelector (".shopping-cart");

// ketika search-form di klik
document.querySelector ("#shopping-cart-button").onclick = (event) => {
  shoppingCart.classList.toggle ("active");
  event.preventDefault();
};

// apabila klik di luar sidebar maka navbar akan hilang
const display = document.querySelector ("#display-menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

// ketika mouse klik di luar side bar
// ketika di klik di halaman kemudian jalankan function event
document.addEventListener ("click", function(clickonsite) {
  if (!display.contains (clickonsite.target) && !navbarNav.contains (clickonsite.target)) {
    navbarNav.classList.remove ("active");
  }

  if (!searchButton.contains (clickonsite.target) && !searchForm.contains (clickonsite.target)) {
    searchForm.classList.remove ("active");
  }

  if (!shoppingCartButton.contains (clickonsite.target) && !shoppingCartButton.contains (clickonsite.target)) {
    shoppingCart.classList.remove ("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (event) => {
    itemDetailModal.style.display = "flex";
    event.preventDefault();
  }
});


// close icon modal button
document.querySelector(".modal .close-icon").onclick = (event) => {
  itemDetailModal.classList.add("closing"); // menambahkan class .closing untuk memulai animasi penutupan

  itemDetailModal.addEventListener("animationend", function() {
    itemDetailModal.style.display = "none";
    itemDetailModal.classList.remove("closing"); // menghapus class .closing untuk memulai animasi penutupan
  }, { once: true }); // { once: true } adalah sebuah code untuk memastikan kita bahwa event listener hanya dipanggil sekali
  event.preventDefault();
}

// if click outside close icon
window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.classList.add("closing"); 

    itemDetailModal.addEventListener("animationend", function() {
      itemDetailModal.style.display = "none";
      itemDetailModal.classList.remove("closing");
    }, { once: true });
  }
};