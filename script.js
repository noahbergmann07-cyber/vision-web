const elements = document.querySelectorAll(
    ".card, .step, .project, .benefit, .faqBox, .priceCard, .aboutBox"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});


elements.forEach(element => {
    observer.observe(element);
});