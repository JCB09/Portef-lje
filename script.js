
// SMOOTH SCROLL:
// Denne koden gjør at siden scroller mykt når man klikker på menyen.
// Dette ser bedre ut enn vanlig hopp.

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


// KLIKK PÅ PROSJEKT:
// Enkel funksjon som viser at eg kan bruke events i JS.
// Når man klikker på et prosjekt kommer det opp en alert.

document.querySelectorAll(".prosjekt").forEach(prosjekt => {
    prosjekt.addEventListener("click", () => {
        alert("Du klikket på et prosjekt!");
    });
});
