const elements = document.querySelectorAll(
    ".card, .step, .project, .benefit, .faqBox, .priceCard, .aboutBox"
);


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 120);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


elements.forEach(element => {
    observer.observe(element);
});
const nav = document.querySelector("nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll <= 20){

        nav.classList.remove("hide");

        lastScroll = currentScroll;

        return;

    }

    if(currentScroll > lastScroll){

        nav.classList.add("hide");

    }else{

        nav.classList.remove("hide");

    }

    lastScroll = currentScroll;

});
