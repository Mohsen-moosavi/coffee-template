const doc = document;
const menuBnt = document.querySelector(".user-panel-header__menu-btn");
const sidebar = document.querySelector(".user-panel-sidebar");
const content = document.querySelector(".user-panel-content");
const closeMenu = document.querySelector(".user-panel-sidebar__close-btn");
const sidebarShadow = document.querySelector(".user-panel-sidebar__shadow");

const userPanelSidebarMenuItem = document.querySelectorAll(".user-panel-sidebar__link");
const userPanelMainContent = doc.querySelector(".user-panel")
const consolePage = doc.querySelector(".console")
const adressesPage = doc.querySelector(".adresses")
const ordersPage = doc.querySelector(".orders")
const popularsPage = doc.querySelector(".popular-products")
const userInfosPage = doc.querySelector(".user-infos")
const ticketsPage = doc.querySelector(".tickets")




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

userPanelSidebarMenuItem.forEach(item=>{
    item.addEventListener("click",(event)=>{
        userPanelSidebarMenuItem.forEach(item=>{
            item.classList.remove("user-panel-sidebar--active")
        })
        event.target.classList.add("user-panel-sidebar--active")
        const userPanelPages = userPanelMainContent.children
        for (const page in userPanelPages) {
            if(userPanelPages[page].id === event.target.dataset.link){
                userPanelPages[page].classList?.remove("d-none")
            }else{
                userPanelPages[page].classList?.add("d-none")
            }
        }
    })
})