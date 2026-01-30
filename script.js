// 
// SMOOTH SCROLL:
// Gjør at siden scroller mykt når man klikker på menyen.
//
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

//
// KLIKK EFFEKT:
// Viser enkel bruk av events i JavaScript.
// Når man klikker på et prosjekt vises en alert.
//
document.querySelectorAll(".prosjekt").forEach(prosjekt => {
    prosjekt.addEventListener("click", () => {
        alert("Du klikket på et prosjekt!");
    });
});
