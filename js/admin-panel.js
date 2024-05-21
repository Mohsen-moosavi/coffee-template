const columXValues = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد" , "شهریور" , "مهر" , "آبان" , "آذر", "دی" , "بهمن" , "اسفند"];
const columnYValues = [500 , 400 , 300 , 200 , 100 ,10 , 200 , 230 , 100 , 400 , 123 , 330];
const columnBarColors = '#389c92'

new Chart("myChart", {
  type: "bar",
  data: {
    labels: columXValues,
    datasets: [{
      backgroundColor: columnBarColors,
      data: columnYValues
    }]
  },options: {
    legend: {display: false},
    title: {
      display: true,
      text: "میزان فروش درهر ماه"
    }
  }
});

const adminPanelSidebarLink = document.querySelectorAll(".admin-panel-sidebar__menu-link")
const adminPanelSidebar = document.querySelector(".admin-panel-sidebar")
const adminPanelContent = document.querySelector(".admin-panel__content")
const adminPanelHeaderMenuBtn = document.querySelector(".admin-panel-header__menu-btn")
const adminPanelSidebarCloseBtn = document.querySelector(".admin-panel-sidebar__close-btn")
const adminPanelSidebarShadow = document.querySelector(".admin-panel-sidebar__shadow")

adminPanelHeaderMenuBtn.addEventListener("click", toggleSidebar)

adminPanelSidebarCloseBtn.addEventListener("click" , toggleSidebar)

adminPanelSidebarShadow.addEventListener("click" , toggleSidebar)

adminPanelSidebarLink.forEach(item=>{
  item.addEventListener("click",(event)=>{
      adminPanelSidebarLink.forEach(item=>{
          item.classList.remove("admin-panel-sidebar__menu-link--active")
      })
      event.currentTarget.classList.add("admin-panel-sidebar__menu-link--active")
      const adminPanelPages = adminPanelContent.children
      for (const page in adminPanelPages) {
          if(adminPanelPages[page].id === event.currentTarget.dataset.link){
              adminPanelPages[page].classList?.remove("d-none")
          }else{
              adminPanelPages[page].classList?.add("d-none")
          }
      }
  })
})


function toggleSidebar(){
  adminPanelSidebar.classList.toggle("admin-panel-sidebar--close")
}