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
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
});

const productNav = document.querySelector(".product-nav")
const productTabsDetails = document.querySelector(".product-tabs__details")



productNav.addEventListener("click", (event) => {
    if (event.target.tagName === 'SPAN') {
        for (const item in productNav.children) {
            productNav.children[item].classList?.remove('product-nav__item--active')
        }
        event.target.parentElement.classList.add('product-nav__item--active')

        for (const item in productTabsDetails.children) {
            productTabsDetails.children[item].classList?.remove('product-tabs__item--active')
        }

        productTabsDetails.children[`${event.target.dataset.item - 1}`].classList.add('product-tabs__item--active')
    }
})