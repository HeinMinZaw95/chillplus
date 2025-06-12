// Scroll Reveal

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,

};

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






const answer = 153519;
const k1 = document.getElementById("one");
const k2 = document.getElementById("two");
const k3 = document.getElementById("three");
const k4 = document.getElementById("four");
const k5 = document.getElementById("five");
const k6 = document.getElementById("six");
const k7 = document.getElementById("seven");
const k8 = document.getElementById("eight");
const k9 = document.getElementById("nine");
const k0 = document.getElementById("zero");
const enter = document.getElementById("enter");
const option = document.getElementById("option");

let pass = "";

k1.onclick = function(){
    document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
    pass = pass + "1";
    document.getElementById("display").textContent = pass;
}
k2.onclick = function(){
    document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
    pass = pass + "2";
    document.getElementById("display").textContent = pass;
}
k3.onclick = function(){
        document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
    pass = pass + "3";
    document.getElementById("display").textContent = pass;
}
k4.onclick = function(){
        document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
    pass = pass + "4";
    document.getElementById("display").textContent = pass;
}
k5.onclick = function(){
        document.getElementById("display").textContent = pass;
   const ans = document.getElementById("display").textContent ;
   pass = pass + "5";
   document.getElementById("display").textContent = pass;
}
k6.onclick = function(){
        document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
    pass = pass + "6";
    document.getElementById("display").textContent = pass;
}
k7.onclick = function(){
        document.getElementById("display").textContent = pass;
   const ans = document.getElementById("display").textContent ;
    pass = pass + "7";
    document.getElementById("display").textContent = pass;
}
k8.onclick = function(){
        document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
   pass = pass + "8";
   document.getElementById("display").textContent = pass;
}
k9.onclick = function(){
        document.getElementById("display").textContent = pass;
   const ans = document.getElementById("display").textContent ;
    pass = pass + "9";
    document.getElementById("display").textContent = pass;
}
k0.onclick = function(){
        document.getElementById("display").textContent = pass;
    const ans = document.getElementById("display").textContent ;
   pass = pass + "0";
   document.getElementById("display").textContent = pass;
}
enter.onclick = function(){

    pass = Number(pass);
    if (pass === 153519){
        document.getElementById("display").textContent = "Welcome";
        pass = "";
        document.getElementById("lock").classList.add("lockclose");
    }
    else{
         document.getElementById("display").textContent = "Something Wrong";
         pass = "";
    }
    
}
// Nav Bar

const boxIndustry = document.getElementById("down_industry");
const boxProducts = document.getElementById("down_products");
const boxListIndustry = document.getElementById("down_list_industry");
const boxListProducts = document.getElementById("down_list_products");
const navLink = document.getElementById("nav_links");




boxIndustry.addEventListener("mouseover", event =>{
    boxListIndustry.style.display = "flex";
    boxListProducts.style.display = "none";
})
boxListIndustry.addEventListener("mouseout", event =>{
    boxListIndustry.style.display = "none";
})

boxProducts.addEventListener("mouseover", event =>{
    boxListProducts.style.display = "flex";
    boxListIndustry.style.display = "none";
})
boxListProducts.addEventListener("mouseout", event =>{
    boxListProducts.style.display = "none";
})



//Navbar End

//Nav Button

const navBtn = document.getElementById("nav_btn");

navBtn.addEventListener("click", event =>{
    navLink.classList.toggle("open");
})


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
