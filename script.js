// Script pentru interacțiuni de bază pe site

// Așteaptă încărcarea completă a paginii
document.addEventListener('DOMContentLoaded', () => {
    // Selectează toate linkurile din navigație
    const navLinks = document.querySelectorAll('nav ul li a');

    // Adaugă un eveniment de clic pentru fiecare link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Obține ID-ul secțiunii
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Derulare lină către secțiune
            }
        });
    });

    console.log('Navigația a fost activată!');
});
