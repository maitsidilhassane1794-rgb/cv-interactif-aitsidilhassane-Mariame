// le text qui varie dans la section home
var typed = new Typed('.text', {
    strings: ["Programmeuse.", "Designer.", "Étudiante.", "Développeuse."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
});

// Logique pour la gestion du simulateur de pages et du formulaire
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link, .logo, a[data-target]');
    const sections = document.querySelectorAll('main section');

    // Fonction pour afficher la page demandée
    function showPage(targetId) {
        sections.forEach(section => {
            // Cache toutes les sections
            section.classList.remove('active-page');
        });
        
        // Affiche la section cible
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-page');
            // Remonte en haut de la page à chaque changement
            window.scrollTo(0, 0); 
        }
        
        // Met à jour la classe 'active' dans la navbar
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Assurer que seul le lien correspondant au target est actif
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });
    }

    // Gestionnaire d'événements pour tous les liens de navigation 
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Récupère "id" de la section cible
            const target = this.dataset.target; 
            if (target) {
                event.preventDefault();
                showPage(target);
            }
        });
    });
/*
    // Logique du formulaire de contact avec validation
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            successMessage.classList.add('d-none');
            errorMessage.classList.add('d-none');

            if (form.checkValidity()) {
                // Si le formulaire est valide, simuler l'envoi
                setTimeout(() => {
                    form.reset(); // Efface le formulaire
                    form.classList.remove('was-validated'); // Réinitialise la validation
                    successMessage.classList.remove('d-none');
                }, 2000); 

            } else {
                // Si le formulaire n'est pas valide
                form.classList.add('was-validated');
                errorMessage.classList.remove('d-none');
                errorMessage.textContent = "Veuillez corriger les champs invalides avant d'envoyer.";
            }
        });
    }
    */
    // Assurer que la page d'accueil est chargée au début
    showPage('home');
});
// Logique pour le changement d'image au survol de la souris
const profileImgElement = document.getElementById('profile-photo');
const imageRemplacement = 'profilecvv.png';
const imageInitiale = profileImgElement.src; // Récupère l'image de base

if (profileImgElement) {
    // Event 1: quand la souris survole l'image (mouseover)
    profileImgElement.addEventListener('mouseover', () => {
        // Change l'attribut src
        profileImgElement.src = imageRemplacement;
    });

    // Event 2: quand la souris quitte (mouseout)
    profileImgElement.addEventListener('mouseout', () => {
        // Remet l'attribut src à l'image initiale
        profileImgElement.src = imageInitiale;
    });
}