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

  window.addEventListener("scroll" , (event)=>{
    console.log(window.scrollY)
    if(window.scrollY === 0){
      header.classList.add("header--whithout-background")
    }
    else{
      header.classList.remove("header--whithout-background")
    }
  })