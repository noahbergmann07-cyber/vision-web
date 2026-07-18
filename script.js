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
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});
