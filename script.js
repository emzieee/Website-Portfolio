Let menu = document.querySelector("#menu-icon");
Let navbar = document.querySelector(".navbar");

menu.addEvenListener("click", function (){
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};