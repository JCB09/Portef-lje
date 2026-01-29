// Smooth scroll når man klikker på menyen
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Enkel effekt på prosjekter (klikk)
document.querySelectorAll(".prosjekt").forEach(prosjekt => {
    prosjekt.addEventListener("click", () => {
        alert("Du klikket på et prosjekt!");
    });
});
