const elMenu = document.querySelector(".burger-menu"),
    elNavbar = document.querySelector(".header__navbar");

if(elMenu) {
    elMenu.addEventListener("click",()=> {
        elNavbar.classList.toggle("active");
    })
}