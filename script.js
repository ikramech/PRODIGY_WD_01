document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navi');
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.getElementById('close-btn');
    const noAccountButton = document.getElementById('noAccountButton');
    const menuToggle = document.getElementById("menu-toggle"); // Icône du menu
    const menu = document.getElementById("menu");

    // Afficher formulaire de connexion
    loginBtn.onclick = () => {
        loginForm.classList.add('active');
    };

    // Masquer formulaire de connexion
    closeBtn.onclick = () => {
        loginForm.classList.remove('active');
    };

    // Redirection pour ceux qui n'ont pas de compte
    noAccountButton.onclick = (event) => {
        event.preventDefault();
        window.location.href = "inscrire1fois.html";
    };

    // Fonction changer la couleur de la barre de navigation 
    const changeNavbarColorOnScroll = () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#989498'; 
           menu.style.backgroundColor='#989498';
        } else {
            navbar.style.backgroundColor = ''; 
            menu.style.backgroundColor='';

        }
    };

    changeNavbarColorOnScroll();
    window.addEventListener('scroll', changeNavbarColorOnScroll);
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); 
       

    });
});
