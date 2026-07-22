// Ajoute une action au clic sur le bouton
document.addEventListener("DOMContentLoaded", () => {
    const boutonRejoindre = document.getElementById("btn-rejoindre");
    const boutonAlbums = document.getElementById("btn-album");

    if(boutonRejoindre){
        /* essayer de faire un zoom quand la souris passe sur le bouton */
        // boutonRejoindre.addEventListener("mouseover",() => {
        //     AnimationEffect()
        // });

        boutonRejoindre.addEventListener("click", () => {
            // alert("Merci pour votre intérêt ! Venez à la Maison des Sports de Sézanne aux horaire d'entrainement pour en savoir plus.");
        
            /* scroll vers le bas de la page / les moyens de contact */
            document.querySelector("#contact").scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if(boutonAlbums){
        boutonAlbums.addEventListener("click", () => {
            // alert("Merci pour votre intérêt ! Venez à la Maison des Sports de Sézanne aux horaire d'entrainement pour en savoir plus.");
        
            /* scroll vers le bas de la page / les moyens de contact */
            document.querySelector("#contact").scrollIntoView({
                behavior: 'smooth'
            });

            
        });
    }
    
    // Add click handler for dropdown toggle on mobile
    document.querySelectorAll('.dropdown > a').forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            const content = dropdown.nextElementSibling;
            content.classList.toggle('dropdown-content-visible');
        });
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