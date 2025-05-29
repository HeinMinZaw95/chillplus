const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e)=> {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,

};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
    delay:1500,
});

ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_btns",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".destination_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".journey_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".showcase_image img",{
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".showcase_content p",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".showcase_content h4",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".showcase_btn",{
    ...scrollRevealOption,
    origin: "bottom",
    delay:1500,
});

ScrollReveal().reveal(".banner_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".discover_card",{
    ...scrollRevealOption,
    interval:500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
})

/* gsap.registerPlugin(ScrollTrigger),

gsap.to(".header_image",{
   x: -400,
    duration: 3,
    scrollTrigger: {
        trigger: ".header_content",
        start: "top 10",
        scrub: 10,
        pin: true,
        toggleActions: "restart none none none",


        //toggleActions: "restart pause resume complete",
        //              onEnter     onLeave     onEnterBack     onLeaveBack
        markers: true,
        toggleClass: "red"
    }
}) */
