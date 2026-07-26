// =====================
// Navbar Effect
// =====================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#050505";

    }else{

        header.style.background = "rgba(8,8,8,.85)";

    }

});




// =====================
// Reveal Animation
// =====================

const sections = document.querySelectorAll(".section, .hero-card");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// =====================
// Current Year Footer
// =====================

const year = document.querySelector("footer p");

if(year){

    year.innerHTML = 
    `© ${new Date().getFullYear()} Mohamd Ghazoul`;

}