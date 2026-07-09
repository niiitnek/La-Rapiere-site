// Ajoute une action au clic sur le bouton
document.addEventListener("DOMContentLoaded", () => {
    const boutonRejoindre = document.getElementById("btn-rejoindre");

    boutonRejoindre.addEventListener("click", () => {
        alert("Merci pour votre intérêt ! Les inscriptions se font sur place aux horaires d'entraînement.");
    });

    // Défilement doux pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});