const menuBnt = document.querySelector(".user-panel-header__menu-btn");
const sidebar = document.querySelector(".user-panel-sidebar");
const content = document.querySelector(".user-panel-content");
const closeMenu = document.querySelector(".user-panel-sidebar__close-btn");
const sidebarShadow = document.querySelector(".user-panel-sidebar__shadow");



menuBnt.addEventListener("click" , ()=>{
    content.classList.toggle("user-panel-content--close");
    sidebar.classList.toggle("user-panel-sidebar--close");
})

closeMenu.addEventListener("click",closeMobileMenu)

sidebarShadow.addEventListener("click",closeMobileMenu)


function closeMobileMenu(){
    content.classList.remove("user-panel-content--close");
    sidebar.classList.remove("user-panel-sidebar--close");
}