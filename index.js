var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  });

  const header = document.querySelector(".header")
  const headerMenu = document.querySelector(".header__menu")
  const openMenu = document.querySelector(".header__menu-icon")
  const closeMenu = document.querySelector(".header__close-menu-icon")
  const shadowElm = document.querySelector(".header__shadow-menu")


  window.addEventListener("scroll" , (event)=>{
    console.log(window.scrollY)
    if(window.scrollY === 0){
      header.classList.add("header--whithout-background")
    }
    else{
      header.classList.remove("header--whithout-background")
    }
  })

  openMenu.addEventListener("click",()=>{
    headerMenu.classList.add("header__menu--open")
    shadowElm.classList.add("header__shadow-menu--show")
  })

  closeMenu.addEventListener("click",()=>{
    headerMenu.classList.remove("header__menu--open")
    shadowElm.classList.remove("header__shadow-menu--show")
  })

  shadowElm.addEventListener("click",()=>{
    headerMenu.classList.remove("header__menu--open")
    shadowElm.classList.remove("header__shadow-menu--show")
  })