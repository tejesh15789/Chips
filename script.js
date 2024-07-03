// SHOW MENU
const navMenu = document.getElementById("nav-menu")
const navtoggle= document.getElementById("nav-toggle")
const navclose=document.getElementById("nav-close")

// MENU SHOW
navtoggle.addEventListener("click",()=>{
    navMenu.classList.add('show-menu')
})

// MENU HIDDEN
navclose.addEventListener("click",()=>{
    navMenu.classList.remove('show-menu')
})

//REMOVE MENU MOBILE
const navlink = document.querySelectorAll('.nav__link');

const linkaction = ()=>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

// SHADOW HEADER
// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     this.scrollY >=50 ? header.classList.add('shadow-header')
//                       : header.classList.remove('shadow-header')
// }
window.addEventListener('scroll', function() {
    const header = document.getElementById('header')
    if (window.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
});



// SWIPER FAVORITES
const swiperFavorites = new Swiper('.favorite__swiper', {
    loop : true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  });

// SHOW SCROLL UP
// const scrollUp = () =>{
//     const scrollUp = document.getElementById("scroll-up")
//     this.scrollY  >= 350 ? scrollUp.classList.add('show-scroll')
//                         :scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

window.addEventListener('scroll', function() {
    const scrollUp = document.getElementById("scroll-up")
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});


// ! SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetHeight - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector(".nav__menu a[href*=' + sectionId + ']")
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// SCROLL REVEAL ANIMATION

const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,

})
sr.reveal(`.home__data,.section__title,.swiper-wrapper,.footer__content`)
sr.reveal(`.home__circle , .home__img`, {delay:600 , scale: .5})
sr.reveal(` .favorites__cheese-1, .favorites__cheese-2`, {delay:1000 , scale:.5 , interval: 100 })
sr.reveal(`.favorite__description, .favorites__cheese-2`, {origin: 'bottom',delay:1000 , scale:.5 , interval: 100 })
sr.reveal(`.care__items, .contact__img `, {origin:'right'})
sr.reveal(`.care__items i,.care__img, .contact__data `, {origin:'left'})
sr.reveal(`.banner__items ,.products__card`, {interval:100})




